const obj = {
  a:1,
  b:2,
  [Symbol.iterator]: function(){
    const _this = this
    const set = new Set()
    return {
      next:function(){
        const exkeys = Object.keys(_this)
        for (let key of exkeys){
          if (!set.has(key)){
            set.add(key)
            return {
              value: _this[key],
              done: false
            }
          }
        }
        return {
          value: undefined,
          done: true
        }
        
      }
    }
  }
}
for(let kk of obj){
  console.log(kk)
}