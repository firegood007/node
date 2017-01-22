var fs = require('fs');
fs.writeFile('data/write.txt','Hello World',function(data){
	console.log(data);
})
