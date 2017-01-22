var fs = require('fs');
fs.mkdir('data/1.txt',function(data){
	console.log(data)
});
console.log('start delete....')
fs.rmdir('data/1.txt',function(){})
