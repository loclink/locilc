const { program } = require('commander');
const { createProjectAction, printItemListAction } = require('./action');
// 注册所有指令方法
const registerCommands = () => {
  // 创建指令
  program
    .command('create')
    .description('Use the project name to create a custom project')
    .argument('<project>', 'project name')
    .action(createProjectAction);

  // 打印列表指令
  program.command('list').description('Print the current can create a list of items').action(printItemListAction);
};

module.exports = {
  registerCommands
};
