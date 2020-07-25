function bibaodemo(x,y){
  this.insert = "insert"
  var arry = [x,y]
  return function(z){
    console.log(this.insert)
    console.log(x)
    console.log(y)
    arry.push(z)
    return arry
  }
}

let outer = {
  insert:"ourter"
}

let runMain = bibaodemo(1,2)
// let newRunMain = runMain.bind(outer)
// newRunMain()
console.log(runMain(3))
console.log(runMain(4))