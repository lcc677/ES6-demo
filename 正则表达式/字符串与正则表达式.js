// -----------------------match---------------------
console.log('-----------------------match---------------------')
let ss = 'zhis name is jksajl name'
let reg = new RegExp('name','g')
let result = ss.match(reg)
console.log(result)
console.log('\n\n')

// -----------------------replace---------------------
console.log('-----------------------replace---------------------')
let result2 = ss.replace(reg,'lcc$&')
console.log(result2)
console.log(ss)
console.log('\n\n')

// -----------------------split---------------------
console.log('-----------------------split---------------------')
let result3 = ss.split(reg)
console.log(result3)
console.log(ss)
console.log('\n\n')


// -----------------------search---------------------
console.log('-----------------------search---------------------')
let result4 = ss.search(reg)
console.log(result4)
console.log(ss)
console.log('\n\n')

// -----------------------matchAll---------------------
console.log('-----------------------metchAll---------------------')
let result5 = ss.matchAll(reg)
console.log(...result5)
console.log('\n\n')