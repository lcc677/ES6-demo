function* add(){
  console.log("上")
  yield 1
  console.log("中")
  yield 2
  console.log("下")
}
const a = add()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())