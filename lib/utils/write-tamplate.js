const fs = require('fs');
const handlebars = require('handlebars');
// 写入模板方法
const writeTamplate = async (filePath, params = {}) => {
  const content = await fs.readFileSync(filePath).toString();
  const tamplate = handlebars.compile(content);
  const result = tamplate(params);
  await fs.writeFileSync(filePath, result);
};

module.exports = {
  writeTamplate
};
