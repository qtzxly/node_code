const fs = require('fs')

fs.appendFile('./autoWrite.txt', '==========', (err) => {
  if (err) {
    console.log('log---> 写入失败')
    return
  }
  console.log('log--->写入成功')
})

fs.writeFile('./autoWrite.txt', '123123', { flag: 'a' }, (err) => {
  if (err) {
    console.log('log---> 写入失败')
    return
  }
  console.log('log--->写入成功')
})

// 同步写入

fs.appendFileSync('./sync.txt', '\r\n222222')

// node .\2appendFile.js
