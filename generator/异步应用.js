var readFile = require('fs-readfile-promise')
var path = require('path')
const dir = path.resolve(__dirname)
let p = readFile(dir + '/next函数.js')
p.then(value =>{
  console.log(value)
}).catch(error =>{
  console.log(error)
})