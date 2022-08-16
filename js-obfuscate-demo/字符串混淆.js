const code = `
var a = 'hello world'
`

const options = {
  compact: false, // 是否压缩
  stringArray: true, // 将一个字符串声明放到一个数组里面
  rotateStringArray: true,
  unicodeEscapeSequence : true, // 字符串 Unicode 转码
}

const obfuscator = require("javascript-obfuscator")

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))
