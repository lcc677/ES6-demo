let a = "12岁的小明,去胡同128号的超市买了58元的水果"
// 先行f否定断言

let reg2 = /\d+(?![元,\d])/g
let result2 = a.match(reg2)
console.log(result2)
for (let res of result2){
  console.log(res) // 58
}
