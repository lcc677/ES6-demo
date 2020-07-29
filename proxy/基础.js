const obj = {
  name:"张三",
}
Object.defineProperty(obj,"age",{
  value:18,
  writable:false,
  enumerable:false
})
const proxy = new Proxy(obj,{
  get:function (target,prop,receiver) {
    console.log("get run")
    if (prop in target){
      return target[prop]
    }else{
      throw new ReferenceError(`Prop name "${prop}" does not exist.`)
    }
  }
})
proxy.age = 15
// console.log(proxy.name)
console.log(proxy.age)

// const child = Object.create(proxy)
// console.log(child.name)

// 实现一个链式调用
double = n => n * 2
pow = n => n * n
reverseInt = n => n.toString().split("").reverse().join("") | 0
var pipe = function(value){
    var funcStack = []
    var oproxy = new Proxy({}, {
        get: function (pipeObject, fnName) {
            console.log(fnName)
            if (fnName === 'get') {
                console.log(funcStack)
                return funcStack.reduce(function (val, fn) {
                    console.log(fn)
                    return fn(val)
                }, value)
            }
            funcStack.push(global[fnName])
            return oproxy
        }
    })

    return oproxy
}
console.log(pipe(1).double.get)