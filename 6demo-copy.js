const fs = require('fs')
// 查看内存占用
const process = require('process')

// 1 readFile

// let data = fs.readFileSync('./autoWrite.txt')
// fs.writeFileSync('./autoWrite-copy.txt', data)
// console.log('log--->process', process.memoryUsage()); //rss

// 2 流式操作

const rs = fs.createReadStream('./autoWrite.txt')
const ws = fs.createWriteStream('./autoWrite-copy2.txt')

rs.on('data', (chunk) => {
  ws.write(chunk)
})
rs.on('end', () => {
  console.log('log--->process', process.memoryUsage()) //rss
})

// 3 管道
// rs.pipe(ws)
