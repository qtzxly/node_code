const fs = require('fs')

// 相对路径  参照的是命令行运行的目录，而不是js文件目录
fs.writeFileSync('./index.html', '123123')
fs.writeFileSync('index2.html', '123222')

// 绝对路径
fs.writeFileSync('C:/qtzxly_github/node_code/fs/index3.html', '123333')
// fs.writeFileSync('/index4.html', '1234444')

console.log('log--->__dirname', __dirname)
fs.writeFileSync(__dirname + '/index4.html', '1234444')
