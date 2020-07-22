// console.log(/\d+(?=%)/.exec('100% of US presidents have been male'))  // ["100"]
// console.log(/\d+(?!%)/.exec('that’s all 44 of them'))

// console.log(/\d+(?!%)/.exec('100% of US presidents have been male'))  // ["100"]
// console.log(/\d+(?=%)/.exec('that’s all 44 of them'))
console.log(/(?<=(\d+)(\d+))3$/.exec('1053'))
