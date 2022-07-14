const chalk = require('chalk');
const output = (message = '') => {
  console.log(message);
};

output.error = (errorMessage) => {
  console.log(chalk.red(errorMessage));
};

output.succeed = (succeedMessage) => {
  console.log(chalk.green(succeedMessage));
};

output.warning = (warningMessage) => {
  console.log(chalk.yellow(warningMessage));
};

output.needUpdate = (newVersion) => {
  output.warning('The existing new version, ' + newVersion);
  output.warning(`Please perform "npm install ${require('../../package.json').name} -g" update to the latest version`);
};

module.exports = {
  output
};
