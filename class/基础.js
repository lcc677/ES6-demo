// const person2 = new Person("xiaoming", 18) // 报错
class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }
  toString(){
    return `我叫:${this.name},我的年龄:${this.age}`
  }
  get itName() {
    console.log("我获取了名字")
    return this.name
  }
  set itName(value) {
    console.log("我设置了名字")
    this.name = value
  }
  static print(){
    console.log("我是一个人")
  }
  static label = "人"
}
const person1 = new Person("xiaoming",18)
console.log(person1.toString === Object.prototype.toString)
Person.print()
console.log(Person.label)
console.log(person1.print)// error

console.log(person1.hasOwnProperty('name'))
console.log(person1.hasOwnProperty('age'))
console.log(person1.hasOwnProperty('toString'))
const person1Prototype = Object.getPrototypeOf(person1)
console.log(person1Prototype === Object.prototype)
console.log(person1Prototype.hasOwnProperty('name'))
console.log(person1Prototype.hasOwnProperty('age'))
console.log(person1Prototype.hasOwnProperty('toString'))

console.log(person1.itName)
person1.itName = "daming"
console.log(person1.itName)