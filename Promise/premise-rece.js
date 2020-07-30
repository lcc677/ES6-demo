const p1 = new Promise(function (resolve, reject) {
  setTimeout(()=> {
    console.log('我慢了么?')
    resolve('success')
  }, 5000)
})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(()=>{reject('error')}, 2000)
})

const p = Promise.race([p1,p2])
p.then(value => console.log(value)).catch(error => console.log(error))