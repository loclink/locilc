const inquirer = require('inquirer');
const { repoInfo } = require('../config/repo-config');
const { createKoaCliTemplate } = require('../cli/koa-cli');

const createProjectAction = async projectName => {
  const prompt = inquirer.createPromptModule();
  prompt(
    {
      name: 'project',
      type: 'list',
      message: 'Please select the project you want to create?',
      choices: Object.keys(repoInfo)
    }
  )
    .then(res => {
      switch (res.project) {
        case repoInfo.koa.name:
          createKoaCliTemplate(projectName);
          break;
        default:
          break;
      }
    })
    .catch(err => {
      throw err;
    });
};

const printItemListAction = () => {
  console.log(
    Object.keys(repoInfo)
      .map((item, index) => `${index + 1}. ${item}`)
      .join('\n')
  );
};

module.exports = {
  createProjectAction,
  printItemListAction
};
