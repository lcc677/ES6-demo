// console.log(/\d+(?=%)/.exec('100% of US presidents have been male'))  // ["100"]
// console.log(/\d+(?!%)/.exec('that’s all 44 of them'))

// console.log(/\d+(?!%)/.exec('100% of US presidents have been male'))  // ["100"]
// console.log(/\d+(?=%)/.exec('that’s all 44 of them'))
// console.log(/(?<=(\d+)(\d+))3$/.exec('1053'))

// function sum(x, y) {
//     if (y > 0) {
//         return sum(x + 1, y - 1);
//     } else {
//         return x;
//     }
// }

// console.log(sum(1, 100000))

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        console.trace()
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

var sum = tco(function(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    } else {
        return x
    }
});

console.log(sum(1, 100000))

// function factorial(n, total) {
//     if (n === 1) return total;
//     return factorial(n - 1, n * total);
// }

// console.log(factorial(100, 1)) // 120

// function Fibonacci(n) {
//     if (n <= 1) { return 1 };

//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// }

// console.log(Fibonacci(10)) // 89
// console.log(Fibonacci(100)) // 超时
//     // Fibonacci(500) // 超时


// function Fibonacci2(n, ac1 = 1, ac2 = 1) {
//     if (n <= 1) { return ac2 };

//     return Fibonacci2(n - 1, ac2, ac1 + ac2);
// }

// console.log(Fibonacci2(100)) // 573147844013817200000
// console.log(Fibonacci2(1000)) // 7.0330367711422765e+208
// console.log(Fibonacci2(10000)) // Infinity

// http://kangax.github.io/compat-table/es2016plus/