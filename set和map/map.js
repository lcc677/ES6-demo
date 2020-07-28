const a = {a:1}
const b = { b: 2 }
const c = {}
c[a] = 1
c[b] = 2
console.log(a.toString())
console.log(c)

const mapM = new Map([[a,1],[b,2]])
console.log(mapM)

// const wm = new WeakMap();
// // const map = new Map()
// let key = {};
// let obj = { foo: 1 };

// wm.set(key, obj);
// // map.set(key, obj);
// console.log(wm)
// // console.log(map)
// // obj = null;
// // key = null
// // console.log(wm)
// // console.log(map)

const wm = new WeakMap()
let key = {}
let obj = { foo: 1 }

wm.set(key, obj)
console.log(wm)
key = {"p":1}
console.log(wm)
console.log(wm.has(key))
// obj = null;
// wm.get(key)