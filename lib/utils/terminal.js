const { spawn } = require('child_process');
const commandSpawn = (...args) => {
  return new Promise((resolve, rejcet) => {
    const childrenProcess = spawn(...args);

    // childrenProcess.stdout.pipe(process.stdout);
    // childrenProcess.stderr.pipe(process.stderr);

    let exportInfo;
    childrenProcess.stdout.on('data', buffer => {
      exportInfo = buffer.toString();
    });

    childrenProcess.on('close', _ => {
      resolve(exportInfo);
    });

    childrenProcess.on('error', err => {
      rejcet(err);
    });
  });
};
module.exports = {
  commandSpawn
};
