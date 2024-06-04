const fs = require('fs')

const ws = fs.createWriteStream('./流式写入.txt')

ws.write('1234\r\n')
ws.write('5678\r\n')
ws.write('90\r\n')

ws.close()
