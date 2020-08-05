var it = idMaker()

console.log(it.next().value) // 0
console.log(it.next().value) // 1
console.log(it.next().value) // 2
// ...

function idMaker() {
  var index = 0

  return {
    next: function () {
      return { value: index++, done: false }
    }
  }
}