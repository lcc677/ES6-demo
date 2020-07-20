// 基本用法
var a = `this is a string demo
this is a new line    i`
console.log(a.trim())
// 函数
function add(a, b) {
  return a + b
}
let adda = 1
let addb = 2
let word = `${adda} + ${addb} = ${add(adda, addb)}`
console.log(word) // '1 + 2 = 3'
// 模板表达式
let firstNum = 1
let secondNum = 2
console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`)
// 模板嵌套
let qiantao = [
  {
    id: 1,
    name: 'zhang'
  },
  {
    id: 2,
    name: 'song'
  },
  {
    id: 3,
    name: 'liu'
  }
]
const requireStr = `
我们叫${qiantao.map(item=>`${item.name}`).join(',')}
`
console.log(requireStr)
