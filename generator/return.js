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


function* genFuncWithReturn() {
  yield 'a'
  yield 'b'
  return 'The result'
}
function* logReturned(genObj) {
  let result = yield* genObj
  console.log(result)
}

console.log([...logReturned(genFuncWithReturn())])

const gg = genFuncWithReturn()
console.log(gg.next())
console.log(gg.next())
console.log(gg.next())
console.log(gg.next())