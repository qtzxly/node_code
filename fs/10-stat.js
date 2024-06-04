const fs = require('fs')

//异步获取状态
fs.stat('./autoWrite-copy.txt', (err, data) => {
  if (err) throw err
  console.log('data', data)
})
//同步获取状态
let syncData = fs.statSync('./sync.txt')
console.log('syncData', syncData)
console.log('syncData.isDirectory', syncData.isDirectory())
console.log('syncData.isFile', syncData.isFile())

// 结果值对象结构：
// size 文件体积
// birthtime 创建时间
// mtime 最后修改时间
// isFile 检测是否为文件
// isDirectory 检测是否为文件夹
