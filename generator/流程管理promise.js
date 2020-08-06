var fs = require('fs')

function readFilePromise(path){
  return new Promise(function(resolve,reject){
    fs.readFile(path,function(err,str){
      if(err) reject(err)
      else resolve(str)
    })
  })
}


console.log("--------------------------")
var gen = function* () {
  var r1 = yield readFilePromise('./generator/基础用法.js')
  console.log(r1.toString())
  var r2 = yield readFilePromise('./generator/基础用法.js')
  console.log(r2.toString())
}
var g = gen()
var n1 = g.next()
function ff(n){
  if (!n.done){
    console.log(111111111111111)
    n.value.then(function (str) {
      console.log(str.toString())
      ff(g.next(str))
    }).catch(err=>{
      console.log(err)
    })
    console.log(22222222222222)
  }
}
ff(n1)
console.log("--------------------------")
// n1.value(function(err,str){
//   console.log(str.toString())
//   var n2  = g.next(str)
//   n2.value(function (err, str) {
//     console.log(str.toString())
//     n3 = g.next(str)
//     console.log(n3)
//   })
// })