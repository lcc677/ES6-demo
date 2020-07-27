const a1 = [1, 2];
const a2 = a1.concat();
const a3 = a1
console.log(a1 === a2) // false
console.log(a1 === a3) // true

// es6
const a61 = [1, 2]
const a62 = [...a61]
a61.push(3)
console.log(a61 === a62) // false
console.log(a62) // false