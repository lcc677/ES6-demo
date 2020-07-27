let aa = new Array(5)
console.log(aa)
console.log([...aa])
console.log(Array.from(aa))
console.log(new Array())
console.log(Array.of())
console.log(Array.of(2))
console.log(Array.of(1, 2))

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let ss of ['a', 'b'].entries()) {
  // console.log(index, elem);
  console.log(...ss)
}