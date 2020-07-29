const obj = {
  name:"张三",
  score:88
}
const handler = {
  has:function(target,prop){
    console.log('has run')
    return Reflect.has(target,prop)
  }
}
const proxy = new Proxy(obj,handler)
console.log('name' in proxy)
console.log(proxy.hasOwnProperty('name'))