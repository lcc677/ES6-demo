const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    // super.foo();
    Object.getPrototypeOf(this).foo()
  }
}

Object.setPrototypeOf(obj, proto);

obj.foo() // "world"