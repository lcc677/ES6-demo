class Logger {
  constructor(){
    // this.printName = this.printName.bind(this)
    this.oo = ()=>{this.printName()}
  }
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }
  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { oo, printName } = logger;
oo(); // TypeError: Cannot read property 'print' of undefined
printName()