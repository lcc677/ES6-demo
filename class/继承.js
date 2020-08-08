class Point{

}
class SubPoint extends Point{
  constructor(){
    super()
    this.ss = "p"
  }
}
const p = new Point()
const sp = new SubPoint()
// console.log(p)
// console.log(Point.prototype)
// console.log(SubPoint.prototype)
// console.log(SubPoint.__proto__ === Point)
// console.log(SubPoint.prototype === Point)