var fs = require('fs');
fs.appendFile('data/write.txt','Hello Rory',function(error){
	console.log(error)
})
