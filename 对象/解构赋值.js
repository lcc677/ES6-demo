let a = {
  x:1
}
let c = {
  y:2
}
Object.setPrototypeOf(a,c)
let {...b} = a
console.log(a.y)
console.log(b.y)