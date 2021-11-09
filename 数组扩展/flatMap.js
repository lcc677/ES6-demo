const a = ["my name","is flatMap"]
const result1 = a.flatMap(item => {
  return item.split(" ")
})
console.log(result1)

// 修改map返回的新数组 长度,只保留大于4的
const b = [1,2,3,4,5,6]
const result2 = b.flatMap(item => {
  if(item > 4){
    return [item]
  }else{
    return []
  }
})
console.log(result2)