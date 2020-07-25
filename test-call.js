// function currying(fn, n) {
//   this.a = "currying"
//   return function (m) {
//     return fn.call(null, m, n);
//   };
// }

// function tailFactorial(n, total) {
//   this.b = "tailFactorial"
//   console.log(this.a)
//   if (n === 1) return total;
//   return tailFactorial(n - 1, n * total);
// }

// const factorial = currying(tailFactorial, 1);

// console.log(factorial(5)) // 120


function clownsEverywhere(param1,param2,) {
   console.log(000) 
}
clownsEverywhere()