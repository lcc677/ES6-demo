// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>reject(1),100)
//   // setTimeout(() => reject(1), 100)
// })
// // p1.then(res=>{
// //   console.log(res)
// // })


// async function aaaFun() {
//    const b = await p1
//    console.log("bbbbbbbbbbb")
//    console.log(b)
// }
// aaaFun()
// console.log(99)


const p2 = Promise.reject("pp")
async function nnnFun() {
   const b = await p2.catch(()=>{})
   console.log("bbbbbbbbbbb")
   console.log(b)
}
nnnFun()

// p2.then(res=>{
//   console.log("resss")
//   console.log(res)
// })