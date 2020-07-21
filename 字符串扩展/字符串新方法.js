
let s = 'Hello world!';

console.log(s.startsWith('Hello')) // true
console.log(s.endsWith('!')) // true
console.log(s.includes('o')) // true

console.log(s.startsWith('Hello', 6)) // true
console.log(s.endsWith('!', 8)) // true
console.log(s.includes('o', 8)) // true

console.log(s.repeat(2))

let a = "a"
console.log(a.padStart(5, 'x'))
let aa = "aaaaaa"
console.log(aa.padStart(5, 'x'))

let ta = "   ss   "
console.log(ta.trim())
console.log(ta.trimStart())
console.log(ta.trimEnd())