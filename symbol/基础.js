let obj = {}
obj[Symbol('foo')] = "999"
obj[Symbol('foo')] = "8888"
console.log(obj)
console.log(obj[Symbol('foo')])