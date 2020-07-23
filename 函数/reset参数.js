
function add(...nums) {
  let total = 0
  nums.forEach(item=> total += item)
  return total
}

console.log(add(1,2,3,4,5,6))