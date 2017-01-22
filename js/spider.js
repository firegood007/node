var http = require('http');
var url = 'http://www.imooc.com/learn/348';
var cheerio = require('cheerio');
var fs = require('fs');
function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	// [{
	// 	title:'',
	// 	videos: [
	// 		title:'',
	// 		id:''
	// 	]
	// }]
	var courseData = [];
	chapters.each(function(val){
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle : chapterTitle,
			videos:[]
		}
		videos.each(function(item){
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text();
			videoTitle = videoTitle.replace(/\(.*\)/g,'');
			var id = video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title:videoTitle,
				id: id
			})
		})
		courseData.push(chapterData);
	})
	return courseData;
}
function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle;
		fs.appendFile('data/imooc.text',chapterTitle + '\n',function(err){
			if(err)console.log(err);
		})
		item.videos.forEach(function(video){
			fs.appendFile('data/imooc.text','['+video.id+']' + video.title + '\n',function(err){
				if(err)console.log(err);
			})

		})
	})
}
http.get(url,function(res){
	var html ='';
	res.on('data',function(data){
		html += data;
	})
	res.on('end',function(){
		var courseData = filterChapters(html);
		fs.exists('data/imooc.text', function(exists){
			if(exists){
				console.log('开始删除...')
				fs.unlink('data/imooc.text',function(){
					console.log('删除完毕')
					printCourseInfo(courseData);
				})

			}else {
				console.log('直接创建')
				printCourseInfo(courseData);
			}
		});

	})
}).on('eror',function(){
	console.log('error');
})
