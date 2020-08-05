const a = ['a','b','c']
const aiterator = a[Symbol.iterator]()
console.log(aiterator.next())
console.log(aiterator.next())
console.log(aiterator.next())
console.log(aiterator.next())
console.log(aiterator.next())