function* gen(){
  const a = yield 1
  yield a
  yield 3
}
const g = gen()
console.log(g.return(10))
console.log(g.return(11))
console.log(g.return())
console.log(g.return())