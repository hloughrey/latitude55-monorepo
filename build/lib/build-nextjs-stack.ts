import {
  CfnOutput,
  SecretValue,
  Stack,
  StackProps,
  aws_iam as iam,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import {
  App,
  GitHubSourceCodeProvider,
  RedirectStatus,
} from '@aws-cdk/aws-amplify-alpha';
import { CfnApp } from 'aws-cdk-lib/aws-amplify';

interface HostingStackProps extends StackProps {
  readonly owner: string;
  readonly repository: string;
  readonly appName: string;
  readonly environment: string;
  readonly githubOauthTokenName: string;
  readonly environmentVariables?: { [name: string]: string };
}

export class NextJsHostingStack extends Stack {
  constructor(scope: Construct, id: string, props: HostingStackProps) {
    super(scope, id, props);

    const role = new iam.Role(
      this,
      'amplify-role-webapp-' + props.environment,
      {
        assumedBy: new iam.ServicePrincipal('amplify.amazonaws.com'),
        description: 'Custom role permitting resources creation from Amplify',
      }
    );

    let iManagedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName(
      'AdministratorAccess'
    );
    role.addManagedPolicy(iManagedPolicy);

    const amplifyApp = new App(this, props.appName, {
      appName: props.appName,
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: props.owner,
        repository: props.repository,
        oauthToken: SecretValue.secretsManager(props.githubOauthTokenName),
      }),
      autoBranchDeletion: true,
      customRules: [
        {
          source: '/<*>',
          target: '	/index.html',
          status: RedirectStatus.NOT_FOUND_REWRITE,
        },
      ],
      environmentVariables: props.environmentVariables,
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: 1,
        frontend: {
          appRoot: `app/${props.appName}`,
          phases: {
            preBuild: {
              commands: ['npm install'],
            },
            build: {
              commands: [
                `npx nx run ${props.appName}:build`,
                `mv ./dist/apps/${props.appName}/.next/standalone/apps/${props.appName}/* ./dist/apps/${props.appName}/.next/standalone/`,
                `sed -i 's/\\/..\\/..//' ./dist/apps/${props.appName}/.next/standalone/server.js`,
              ],
            },
          },
          artifacts: {
            baseDirectory: `./dist/apps/${props.appName}/.next`,
            files: ['**/*'],
          },
          cache: {
            paths: ['node_modules/**/*'],
          },
        },
      }),
      role: role,
    });

    amplifyApp.addBranch('aws-amplify-cdk', {
      stage: 'PRODUCTION',
    });

    //Drop down to L1 to allow new NextJS architecture
    const cfnAmplifyApp = amplifyApp.node.defaultChild as CfnApp;
    cfnAmplifyApp.platform = 'WEB_COMPUTE';

    new CfnOutput(this, 'appId', {
      value: amplifyApp.appId,
    });
  }
}
