let content = " 4 Test Opie Bee Hyaluronic Acid Moisturizing Mask Moisturizing Moisturizing Net Red Source  Cosmetic Skin Care Wholesale Wholesale SRAM  hula test126 test44 "
content = content.replace(/ /g,'  ')
console.log(content)

let forbidenList = ["test126 test44", "test126 test126 test44 test44","test126", "test44","Wholesale"] 
console.log(forbidenList.sort((a,b) =>{
  console.log(a,'++++')
  console.log(b, '-----')
  console.log(a.split(" ").length)
  console.log(a.split(" ").length - b.split(" ").length)
  return b.split(" ").length - a.split(" ").length
}))
console.log(forbidenList)
forbidenList.forEach(y=>{
  let reg = new RegExp(`([^\u4e00-\u9fa5a-zA-Z]${y}[^\u4e00-\u9fa5a-zA-Z])`, 'gim')
  // console.log(content.match(reg))
  // console.log('--------------')
  content = content.replace(reg, ` <span style="color:red;cursor: pointer;" title="ALL">$1</span> `)
  // console.log(content)
})
console.log(content)