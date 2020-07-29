const obj = {
  name: "张三",
}
Object.defineProperty(obj,"age",{
  value:18,
  writable:false,
  configurable:false
})
const proxy = new Proxy(obj, {
  set: function (target, prop, value,receiver) {
    console.log("set run")
    invariant(prop,'set')
    console.log(target)
    target[prop] = value
  }
})
function invariant(key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`)
  }
}
proxy.age = 12
console.log(proxy.name)
console.log(proxy.age)
console.log(proxy._prop)

const child = Object.create(proxy)
child.age = 13
console.log(child.name)
console.log(child.age)
console.log(proxy.age)
a = 19
var b = 177