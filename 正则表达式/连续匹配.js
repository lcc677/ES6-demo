let content = " had name name namepl is buy name my name "

const newContent = content.replace(/[\s↵]/g, '  ')
console.log(newContent)
let a = newContent.replace(/[^\u4e00-\u9fa5a-zA-Z]name[^\u4e00-\u9fa5a-zA-Z]/g,' lcc ')


let reg = /[^\u4e00-\u9fa5a-zA-Z]name[^\u4e00-\u9fa5a-zA-Z]/g
let b = content.replace(reg, function(){
  reg.lastIndex --
  return ' lcc '
})


console.log(b)
// console.log(newContent.match(/[^\u4e00-\u9fa5a-zA-Z]name[^\u4e00-\u9fa5a-zA-Z]/g))
// content = a.replace(/[\s]{2}/g, ' ')
// console.log(content)
// console.log('*********************************')
// 

console.log(reg.exec(content))
console.log(reg.lastIndex)
console.log(reg.exec(content))
console.log(reg.lastIndex)
console.log(reg.exec(content))
console.log(reg.lastIndex)
