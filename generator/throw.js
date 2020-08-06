function* gen(){

  try {
    yield 9
  } catch (error) {
    console.log(error)
  }

}
const g = gen()
console.log(g.next())
try {
  g.throw("cuow")  
} catch (error) {
  console.log(0)
  console.log(error,'---')
}
console.log(111)