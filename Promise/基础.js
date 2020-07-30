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

