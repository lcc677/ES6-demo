function jiecheng(n){
  if (n==1){
    return n
  }else{
    return n*jiecheng(n-1)
  }
}
// 蹦床函数
function outerFunction(n){
  return otherjiecheng(n,1)
}

function otherjiecheng(n,m){
  if(n==1){
    return n*m
  }else{
    return otherjiecheng.bind(null,n-1,n*m)
  }
}
function bengchuang(f){
  while(f && f instanceof Function){
    f = f()
  }
  return f

}
console.log(bengchuang(otherjiecheng(10000000,1)))


console.log(jiecheng(10))