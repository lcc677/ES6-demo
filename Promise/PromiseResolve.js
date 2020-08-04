let thenable = {
  then: function (resolve, reject) {
    console.log("then")
    resolve(42)
  }
}

let p1 = Promise.resolve(thenable)
p1.then(function (value) {
  console.log(value)  // 42
})