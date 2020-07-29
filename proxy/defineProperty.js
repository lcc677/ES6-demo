var handler = {
  defineProperty(target, key, descriptor) {
    console.log('defineProperty run')
    // Reflect.defineProperty(target,key,descriptor)
    return false
  },
  // set(target,prop,value,rescriver){
  //   console.log('set run')
  //   target[prop] = value
  // },
}
var target = {}
var proxy = new Proxy(target, handler)
proxy.foo = 'bar' // 不会生效
console.log(proxy)