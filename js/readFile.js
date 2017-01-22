var fs = require('fs');
fs.readFile('data/test.txt','utf-8',(err,data)=>{
	if(err)return console.log(err)
	console.log("同步:"+data.toString());
})
var data = fs.readFileSync('data/test.txt');
console.log('异步:'+data.toString());
