let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
console.log(foo) // 'aaa'
console.log(bar) // 'bbb'

let { bar2, foo2 } = { foo2: 'aaa', bar2: 'bbb' };
console.log(foo2) // 'aaa'
console.log(bar2) // 'bbb'

const { bar: baz } = { bar: 'a' }
console.log(baz)

let obj1 = { a: 1 };
let obj2 = { b: 2 };

Object.setPrototypeOf(obj1, obj2);
const {a,b} = obj1
console.log(a)
console.log(b)