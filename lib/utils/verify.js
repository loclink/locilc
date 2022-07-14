const shell = require('shelljs');
const { output } = require('./output');
// 校验仓库版本
const verifyVersion = async () => {
  let newVersionString = await shell.exec(`npm view ${require('../../package.json').name} versions --json`, {
    silent: true
  }).stdout;
  newVersionString = eval(newVersionString);
  if (typeof newVersionString === 'string') {
    if(newVersionString.trim() !== require('../../package.json').version){
      output.needUpdate(newVersionString.trim());
    }
  } else if (newVersionString[newVersionString.length - 1] !== require('../../package.json').version) {
    output.needUpdate(newVersionString[newVersionString.length - 1]);
  }
};

module.exports = {
  verifyVersion
};
