function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}
let a = 0
let b = null
let c = undefined
if (a){
  console.log(a)
}
if(b){
  console.log(b)
}
if (c){
  console.log(c)
}

function add({x=0,y=0}={}){
  console.log(x,y)
}
add()
