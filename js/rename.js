var fs = require('fs');
fs.rename('data/write.txt','data/writerStream.txt',function(data){
	console.log(data);
})
