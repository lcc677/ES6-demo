let obj = {}
obj[Symbol('foo')] = "999"
obj[Symbol('foo')] = "8888"
console.log(obj)
console.log(obj[Symbol('foo')])
let s1 = Symbol('key1')
console.log(Symbol.keyFor(s1))
let s2 = Symbol.for('key1')

console.log(s1 === s2)
// let obj2 = {
//   [s1]: "value",
//   s1:'s1'
// }
// let obj3 = {...obj2}
// console.log(obj3)
// console.log(obj2)
// console.log(JSON.stringify(obj2))
// console.log(obj2[s1]) // value
// console.log(obj2.s1) // undefined
