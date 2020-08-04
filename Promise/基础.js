function sleep(time){
  return new Promise(function(resolve,reject){
    console.log("开始")
    setTimeout(() => {
      console.log("等会")
      resolve(11)
    }, time)
    console.log("结束")
  })
}
sleep(1000).then(value => {
  console.log(value)
})
console.log("end")

console.log(Object.__proto__)
console.log("+++++++")
// console.log(Promise.toString())

// promise.then(function(){
//   console.log("chenggon")
// })
const p1 = new Promise(function (resolve, reject) {
  // console.log(9999)
  // reject()
  // throw new Error()
  setTimeout(() => {
    resolve(1)
    // console.log(ppp)
    // throw new Error("999")
    // reject()
  }, 3000)
})

p1.then(value => {
  // console.log(8888)
  throw new Error("j")
  // console.log(111)
}).catch(value => {
  console.log("7777")
  // console.log(value)
})
console.log(1010)
