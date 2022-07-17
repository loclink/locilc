const path = require('path');
const ora = require('ora');
const shell = require('shelljs');
const chalk = require('chalk');
const { promisify } = require('util');
const { output } = require('../utils/output');
const { repoInfo } = require('../config/repo-config');
const { writeTamplate } = require('../utils/write-tamplate');
const download = promisify(require('download-git-repo'));

// 克隆项目
const cloneTemplate = async (projectName, projectType) => {
  output.warning('Initialize the repository...');
  const loading = ora();
  loading.start('Is cloning templates in the warehouse...');
  await download(repoInfo[projectType].repo, projectName, { clone: true })
    .then((_) => {
      loading.succeed(chalk.green('Template cloned'));
    })
    .catch((err) => {
      loading.fail(chalk.green('Cloning failed:'));
      throw err;
    });
};

// 写入参数
const writeParams = async (projectName, targetName, params) => {
  // 动态参数写入模板
  const packagePath = path.join(`./${projectName}`, targetName);
  await writeTamplate(packagePath, params);
};

// 执行npm命令
const executeNpmCommand = async (projectName, command, silent) => {
  return new Promise((resolve, reject) => {
    shell.exec(`npm ${command}`, { silent, cwd: `./${projectName}` }, (code, stdout, stderr) => {
      if (code !== 0) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

// 安装依赖
const installationDepends = async (projectName) => {
  const installLoading = ora();
  installLoading.start(`Project: ${projectName} start installing dependencies...`);
  await executeNpmCommand(projectName, 'install', true)
    .then((res) => {
      installLoading.succeed(chalk.green('Successful installation!'));
    })
    .catch((err) => {
      installLoading.fail('Installation failed:');
      throw err;
    });
};

// 初始化git
const gitInit = async (projectName) => {
  if (shell.which('git')) {
    await shell.exec('git init', { silent: true, cwd: `./${projectName}` });
    await shell.exec('git add .', { silent: true, cwd: `./${projectName}` });
    await shell.exec('git commit -m "init project"', { silent: true, cwd: `./${projectName}` });
  }
};

module.exports = {
  cloneTemplate,
  writeParams,
  executeNpmCommand,
  installationDepends,
  gitInit
};
