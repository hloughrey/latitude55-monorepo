const fs = require('fs');
const execSync = require('child_process').execSync;

function listAffectedApplications() {
  console.log('Checking which applications are affected');

  const affectedApplications = execSync(
    `npx nx affected:apps --base=master --head=${process.env.CIRCLE_BRANCH} --plain`
  )
    .toString()
    .trim()
    .split(' ');

  console.log(
    'The affected applications are: ',
    affectedApplications.join(', ')
  );

  return JSON.stringify({ applicationName: affectedApplications });
}

function writeAffectedApplicationsFile() {
  fs.writeFile(
    './affectedApplications.json',
    listAffectedApplications(),
    { flag: 'a+' },
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}

writeAffectedApplicationsFile();
