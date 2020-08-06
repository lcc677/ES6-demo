function sum(x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1)
  } else {
    return x
  }
}

function trampoline(f) {
  while (f && f instanceof Function) {
    f = f()
  }
  return f
}
console.log(trampoline(sum(1,1000000)))