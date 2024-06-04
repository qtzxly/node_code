const fs = require('fs')

const rs = fs.createReadStream('./autoWrite.txt')

rs.on('data', (chunk) => {
  console.log('log--->chunk', chunk)
  console.log('log--->chunk.length', chunk.length)
})

// end可选事件
rs.on('end', () => {
  console.log('log--->end')
})
