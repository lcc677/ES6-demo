var fs = require('fs')

function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, str) {
      if (err) reject(err)
      else resolve(str)
    })
  })
}


console.log("--------------------------")
var gen = async function () {
  var r1 = await readFilePromise('./generator/基础用法.js')
  console.log(r1.toString())
  var r2 = await readFilePromise('./generator/基础用法.js')
  console.log(r2.toString())
}
gen()
console.log("--------------------------")