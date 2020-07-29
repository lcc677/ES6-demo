function add(a,b){
  console.log(arguments)
  console.log(a,b)
}
const handler = {
  apply:function(target ,ctx,args){
    console.log(0)
    return target.apply(ctx,args)
    // return Reflect.apply(...arguments)
  }
}
const proxy = new Proxy(add,handler)
proxy(1,2)