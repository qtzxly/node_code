const fs = require('fs')
const path = require('path')

// path.resolve 拼接规范的绝对路径
console.log('log--->1', path.resolve(__dirname, './index.html'))
console.log('log--->1', path.resolve(__dirname, 'index2.html'))

// path.sep 分隔符  windows=> \   , linux=> /
console.log('log--->2', path.sep)

let str = 'C:\\qtzxly_github\\node_code\\path\\path.js'

// path.parse 解析路径
console.log('log--->3', str)

// path.basename 解析路径基础名
console.log('log--->basename', path.basename(str))

// path.dirname 解析路径目录名
console.log('log--->dirname', path.dirname(str))

// path.extname 解析路径拓展名
console.log('log--->extname', path.extname(str))
