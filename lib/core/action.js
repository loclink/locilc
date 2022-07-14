const inquirer = require('inquirer');
const { cloneTemplate, writeParams, installationDepends } = require('../cli/common');
const { koaExtraAction } = require('../cli/koa-cli');
const { toolsBaseExtraAction } = require('../cli/tools-base-cli');
const { repoInfo } = require('../config/repo-config');
const { output } = require('../utils/output');

const createProjectAction = async (projectName) => {
  const prompt = inquirer.createPromptModule();
  let inputResult;
  const result = await prompt({
    name: 'project',
    type: 'list',
    message: 'Please select the project you want to create?',
    choices: Object.keys(repoInfo)
  });

  if (result.project === repoInfo['tools-base'].name) {
    inputResult = await prompt({
      name: 'umdName',
      type: 'input',
      message: 'Please enter a name as a global object of UMD module:'
    });
    if (!inputResult.umdName) {
      output.error('"umdName" do not empty');
      process.exit();
    }
  }

  await cloneTemplate(projectName, result.project);
  await writeParams(projectName, 'package.json', { projectName });
  inputResult?.umdName && (await writeParams(projectName, 'tools.config.json', { umdName: inputResult.umdName }));
  await installationDepends(projectName);

  switch (result.project) {
    case repoInfo['koa'].name:
      koaExtraAction(projectName)
      break;
    case repoInfo['tools-base'].name:
      toolsBaseExtraAction();
      break;
    default:
      break;
  }
};

const printItemListAction = () => {
  console.log(
    Object.keys(repoInfo)
      .map((item, index) => `${index + 1}. ${repoInfo[item].name}`)
      .join('\n')
  );
};

module.exports = {
  createProjectAction,
  printItemListAction
};
