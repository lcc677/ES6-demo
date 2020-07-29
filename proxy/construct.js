var p = new Proxy(function () { }, {
  construct: function (target, args,newTarget) {
    console.log('called: ' + args.join(', '))
    console.log(newTarget == p)
    return { value: args[0] * 10 }
  }
})
const p1 = new p(2)
console.log(p1.value)