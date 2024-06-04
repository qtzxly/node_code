const fs = require('fs')

fs.readFile('./autoWrite.txt', (err, data) => {
  if (err) {
    console.log('log---> 写入失败')
    return
  }
  console.log('log--->写入成功', data.toString())
})

let data = fs.readFileSync('./sync.txt')
console.log('log--->data', data.toString())
