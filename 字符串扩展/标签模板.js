let a=9
let b=9
function parse(params){
  let word = ''
  console.log(params)  // params就是那个数组
  console.log(arguments) // arguments除去第一个外,其余的就是这个模板中的参数
  for(let i=0;i<params.length;i++){
    let itemWord = params[i]
    let value = ''
    if (i+1 < arguments.length){
      value = arguments[i + 1]
      console.log(value)
    }
    word += itemWord+value
  }
  console.log(word)
  return word
}
parse`我们来做个算术题${a} + ${b} = ${a + b};`