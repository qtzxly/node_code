const fs = require('fs')

const files = fs.readdirSync('./fs')

files.forEach((item) => {
  let data = item.split('-')
  let [num, name] = data
  if (Number(num) < 10) {
    num = '0' + num
    let newName = num + '-' + name
    console.log('log--->newName', newName)
    fs.renameSync(`./fs/${item}`, `./fs/${newName}`)
  }
})
