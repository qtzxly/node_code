const fs = require('fs')

fs.writeFile('./autoWrite.txt', '自动 log', (err) => {
  if (err) {
    console.log('log---> 写入失败')
    return
  }
  console.log('log--->写入成功')
})

// node .\1writeFile.js
