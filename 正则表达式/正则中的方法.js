let reg = /name/g
let ss = "shit nameinnks name"
// console.log(reg.test(ss))
console.log(reg.exec(ss))
console.log(reg.lastIndex)
console.log(reg.exec(ss))
console.log(reg.lastIndex)
console.log(reg.exec(ss))