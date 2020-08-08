const a = Symbol('a')
class Person{
  [a](){
    console.log("999")
  }
}
const p = new Person()
console.log(Reflect.ownKeys(p.__proto__))
console.log(Object.getOwnPropertySymbols(p.__proto__))
console.log(Object.getOwnPropertyNames(p.__proto__))
p[Reflect.ownKeys(p.__proto__)[1]]()