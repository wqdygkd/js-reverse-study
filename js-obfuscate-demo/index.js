const code = `
let x = '1' + 1
console.log('x', x)
`

const options = {
  compact: false, // 是否压缩
  controlFlowFlattening: true,
  identifierNamesGenerator: 'mangled', // 变量名混淆 hexadecimal 默认值 替换为 16 进制形式的字符串 ， mangled 将变量名替换为普通的简写字符
  identifiersPrefix: 'aa', // 变量名前缀  混淆后的变量前缀加上自定义的字符串
  renameGlobals: false, // 默认false ,是否混淆全局变量和函数名
}

const obfuscator = require("javascript-obfuscator")

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))
