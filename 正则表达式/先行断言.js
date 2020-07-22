
let a = "12岁的小明,去胡同128号的超市买了58元的水果"
let reg = /\d+元/g
console.log(reg.test(a))
let result = a.match(reg)
console.log(result[0]) // 58元
console.log(result[0].replace('元', ''))

// 先行断言

let reg2 = /(\d+)(?=(元))/
let result2 = a.match(reg2)
console.log(result2) // ['58']