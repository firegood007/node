var url = require('url');
var request = require('request');
var fs = require('fs');
var options = url.parse('http://www.badu.com:3304/lib/index.html');
console.log(options);
request('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png').pipe(fs.createWriteStream('data/1.png'))
