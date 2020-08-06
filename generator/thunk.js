var thunkify = require('thunkify')

var fs = require('fs')

var tf = thunkify(fs.readFile)
tf('./generator/异步应用.js')(function(err,str){
  console.log(str.toString())
})