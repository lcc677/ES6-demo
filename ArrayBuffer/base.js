const ab = new ArrayBuffer(4)

const view1 = new Int32Array(ab)
const view2 = new Int16Array(ab)

console.log(view1)
console.log(view2)

view1[0] = 696665656
console.log(view1) //Int32Array(1) [ 0 ]
console.log(view2) //Int16Array(2) [ 0, 0 ]