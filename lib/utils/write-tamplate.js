const fs = require('fs')
const handlebars = require('handlebars')
// 写入模板方法
const writeTamplate = (filePath, params = {}) => {
  const content = fs.readFileSync(filePath).toString()
  const tamplate = handlebars.compile(content)
  const result = tamplate(params)
  fs.writeFileSync(filePath, result)
}

module.exports =  {
  writeTamplate
}
