const f = () => console.log('now')
Promise.resolve().then(f)
console.log('next')

// Promise.try(f)
// console.log('next')