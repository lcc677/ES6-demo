const a = [1,2,3,4,5,6]
for (let i=0;i<a.length;i++){
  let i = "我才是主体"
  console.log(i)
}
var result = []
for (var i=0;i<a.length;i++){
  result[i] = function(){
    console.log(i)
  }
}
result[0]()