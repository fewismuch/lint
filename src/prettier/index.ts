export default {
  $schema: 'https://json.schemastore.org/prettierrc',
  tabWidth: 2, // 缩进使用两个空格
  useTabs: false, // 不使用制表符进行缩进
  printWidth: 100, // 单行代码长度不超过100个字符
  semi: false, // 不使用分号作为语句结束符
  singleQuote: true, // 使用单引号而不是双引号
  endOfLine: 'lf', // 换行符使用 LF
  trailingComma: 'es5', // 在 ES5 中有效的结尾逗号（对象、数组等）
  jsxSingleQuote: true, // 在 JSX 中也使用单引号
  bracketSpacing: true, // 在对象字面量括号内部保留一个空格
  arrowParens: 'always', // 在箭头函数参数周围始终使用括号
}
