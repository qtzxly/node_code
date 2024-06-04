const fs = require('fs')

// 要cd进入当前文件夹下操作

fs.rename('./autoWrite.txt', './观书有感.txt', (err) => {
  if (err) throw err
  console.log('移动完成')
})

// fs.renameSync('./autoWrite-copy2.txt', './dir/我的座右铭.txt')
