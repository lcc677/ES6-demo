function sleepPromise(t){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log(999)
      resolve()
    }, t);
  })
}

async function sleep(){
  console.log("开始了")
  await sleepPromise(5000)
  console.log("我睡了?")
  return "888"
}
sleep().then(value =>{
  console.log(value)
})