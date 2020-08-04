let a = Array(3)
let b = {}
a.forEach(item =>{
  console.log('99')
})
for(let x of a){
  console.log("88")
  console.log(x)
}
for (let x in a) {
  console.log("77")
}
console.log(a[Symbol.iterator].toString())
console.log(b[Symbol.iterator])
console.log(a.length)