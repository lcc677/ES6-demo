const queueObservers = new Set()
const observersMap = new Map()

const observerFun1 = function(prop,changeValue){
  console.log(`观察1检查到${prop}的值变化成${changeValue}`)
}
const observerFun2 = function (prop,changeValue) {
  console.log(`观察2检查到${prop}的值变化成${changeValue}`)
}
queueObservers.add(observerFun1)
queueObservers.add(observerFun2)

function observer(obj){
  return new Proxy(obj,{set})
}
const set = function(target,prop,value){
  if(!observersMap.has(prop)){
    if(prop === "name"){
      observersMap.set(prop,observerFun1)
    }else if(prop === "age"){
      observersMap.set(prop, observerFun2)
    }
  }
  observersMap.get(prop)(prop, value)
  // queueObservers.forEach(item => item(prop,value))
  Reflect.set(target,prop,value)
}

const data = observer({})
data.name = "name"
// data.age = 12

