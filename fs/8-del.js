const fs = require('fs')
// 1
fs.unlink('./test.txt', (err) => {
  if (err) throw err
  console.log('删除成功')
})
// 2
fs.rm('./test.txt', (err) => {
  if (err) throw err
  console.log('删除成功')
})
// 3
fs.unlinkSync('./test2.txt')
