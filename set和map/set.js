let a = [1,2]
let b = [3,4]
const arry = Array.of(a,b)
let ws32 = new WeakSet()
ws32.add([1, 2])
// ws32.add(b)
console.log(arry)
console.log(ws32)
// a = null
// b = null
// console.log(arry)
// console.log(ws.has(a))

// const ass = [[1, 2], [3, 4]];
// const wss = new WeakSet(ass);
// console.log(wss[0])

const set = new Set()
set.add({})
set.add({})
set.add({})
console.log(set)

console.log(set[Symbol.iterator])