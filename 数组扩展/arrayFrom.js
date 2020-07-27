const pattern = /name/
const str = "my name is ES6"
const result = str.match(pattern)
console.log(Array.from(result))
console.log(...result)
console.log(result[Symbol.iterator])