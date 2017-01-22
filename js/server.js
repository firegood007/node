var http = require("http"); //加载http模块服务

function onRequest(request, response){ //定义请求 处理函数
	var str='{"id":"0036",name:"jack",arg:123}';
	//写入文件头
	response.writeHead(200,{"Content-Type":'text/plain'});
	//写入文件内容
	response.write(str);
	//写入结束
	response.end();

}
// 创建服务，并把端口号设置8888
http.createServer(onRequest).listen(8888);

var node = document.getElementsByClassName('post-view')[0];
function getColor(node){
	var style = window.getComputedStyle(node,null)|| node.currentStyle;
	if (style.backgroundColor === 'rgba(0, 0, 0, 0)') {
		getColor(node.parentNode);
	}else {
		return style.backgroundColor;
	}
}
getColor(node);
