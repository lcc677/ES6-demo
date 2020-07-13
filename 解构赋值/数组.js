const [a, b, c] = [1, 2, 3]
console.log(a) // 1
console.log(b) //2
console.log(c) //3

const [a1, [b1], d1] = [1, [2, 3], 4];
console.log(a1) // 1
console.log(b1) //2
console.log(d1) // 4
const [a2, ...c2] = [1, 2, 3] //扩展运算符的剩余
console.log(a2) //1
console.log(c2) //[2,3]