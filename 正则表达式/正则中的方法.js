let reg = /name/g
let ss = "shit nameinnks name"

console.log(reg.exec(ss))
console.log(reg.lastIndex)
console.log(reg.exec(ss))
console.log(reg.lastIndex)
console.log(reg.exec(ss))

let sss = "shit nameinnks name"
let reg2 = /\d*/
console.log(reg2.test(sss))