var handler = {
  deleteProperty(target, key) {
    console.log(`delete:${key}`)
    delete target[key]
    return true
  }
}

var target = { foo: 'foo' }
var proxy = new Proxy(target, handler)
delete proxy.foo
console.log(proxy)