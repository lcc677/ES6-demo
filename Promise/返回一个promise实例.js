const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {console.log(ppp)}, 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('999'), 1000)
  // setTimeout(() => reject("error"), 1000)
})

p2
  .then(result => {
    console.log(result)
    return result
  }).then(result => console.log(result))
  // .catch(error => console.log(error))