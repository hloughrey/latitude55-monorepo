import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

function pascalCase(str: string): string {
  return names(str).className;
}

function kebabCase(str: string): string {
  return names(str).fileName;
}

const atomicLevelOptions = ['atoms', 'molecules', 'organisms'] as const;
type AtomicLevelOptions = typeof atomicLevelOptions[number];

type Schema = {
  name: string;
  directory: string;
  atomicLevel: AtomicLevelOptions;
};

function exportComponent(tree: Tree, filePath: string, componentName: string) {
  const fileToRead = `${filePath}/index.ts`;
  const contents = tree.read(fileToRead).toString();

  const newContents = `${contents} export * from './${componentName}'`;
  tree.write(fileToRead, newContents);
}

export default async function (
  tree: Tree,
  { atomicLevel = 'atoms', ...rest }: Schema
) {
  if (!atomicLevelOptions.includes(atomicLevel)) {
    throw Error('Please specify an accepted Atomic Level');
  }

  if (!rest.directory) {
    throw Error(
      'You need to specify the directory in which you want to create the new component'
    );
  }

  const componentAtomicLevelPath = `${rest.directory}/src/lib/${atomicLevel}`;
  const componentPath = `${componentAtomicLevelPath}/${pascalCase(rest.name)}`;
  const componentName = pascalCase(rest.name);
  const fileName = kebabCase(rest.name);

  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    componentPath, // destination path of the files
    {
      tmpl: '',
      componentName,
      fileName,
      typeName: `${componentName}Properties`,
      atomicLevel: pascalCase(atomicLevel),
    } // config object to replace variable in file templates
  );

  exportComponent(tree, componentAtomicLevelPath, pascalCase(rest.name));

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
