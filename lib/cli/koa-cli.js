const chalk = require('chalk');

const koaExtraAction = async (projectName) => {
  console.log(chalk.yellow('Completing the project!'));
  console.log(chalk.yellow('\n' + 'Start the project: ' + '\n'));
  console.log(chalk.greenBright('  cd ' + projectName + '\n' + '  npm start' + '\n'));
};
module.exports = {
  koaExtraAction
};
