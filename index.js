#!/usr/bin/env node
const { program } = require('commander');
const { registerCommands } = require('./lib/core/command');
// 查看版本号
program.version(require('./package.json').version, '-v, --version', 'Print the version number');

// 创建指令
registerCommands();

program.parse(process.argv);
