const ora = require('ora');
const chalk = require('chalk');
const path = require('path');
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { repoInfo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { writeTamplate } = require('../utils/write-tamplate');

const createKoaCliTemplate = async projectName => {
  console.log(chalk.yellow('Initialize the repository...'));
  const loading = ora();
  loading.start('Is cloning templates in the warehouse...');
  await download(repoInfo.koa.repo, projectName, { clone: true })
    .then(_ => {
      loading.succeed(chalk.green('Template cloned'));
    })
    .catch(err => {
      loading.fail(chalk.red('Cloning failed:'));
      throw err;
    });

  // 动态参数写入模板
  const packagePath = path.join(`./${projectName}`, 'package.json');
  writeTamplate(packagePath, { projectName });

  // 判断操作系统，执行不同指令
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';

  loading.start('Being loaded and install the project belongs to rely on...');

  await commandSpawn(command, ['install'], { cwd: `./${projectName}` })
    .then(_ => {
      loading.succeed(chalk.green('Depend on the installation is complete'));
    })
    .catch(err => {
      loading.fail(chalk.red('An error occurred while trying to install dependencies:'));
      throw err;
    });
  console.log(chalk.yellow('Completing the project!'));
  
  console.log(chalk.yellow('\n' + 'Start the project: ' + '\n'));
  console.log(chalk.greenBright('  cd ' + projectName + '\n' + '  npm start' + '\n'));
};
module.exports = {
  createKoaCliTemplate
};
