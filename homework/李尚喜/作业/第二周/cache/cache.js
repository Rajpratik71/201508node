
var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
http.createServer(function(req,res){
 if(req.url =='/favicon.ico'){
   return res.end('404');
 }
 var filename = req.url.slice(1);//获取访问的文件名 slice(1)去掉/
  // console.log(req.url);
  etagHandler(filename,req,res);
}).listen(8080);


/*

 etag entity tag 实体标签的缩写
 根据实体的内容生成的一段字符中。可以标识资源的状态。
 etag是服务器生成的，发送给客户端，客户端不关心你的etag如何生成的

 1.第一次服务器生成etag发给客户端
 2.第二次客户端把if-none-match发给服务器
 3.服务器判断此etag是否有变化
     有变化 响应200 并发回最新内容
     无变化 响应304
 */
function etagHandler(filename,req,res){
    fs.readFile(filename,function(err,content){
        var hash = gethash(content);//计算文件最新的md5值
        console.log(hash); //ousZV8zKzF1rftdxcTs2Aawapls=
        var nonematch = req.headers['if-none-match']; //记得小写  if-none-match
        if(hash == nonematch){
            res.statusCode = 304;
            res.end();
        }else{
            res.setHeader('Etag',hash);
            res.end(content);
        }
    })
}

function gethash(str){
    return crypto.createHash('sha1').update(str).digest('base64');// hex base64 utf8  ascii
}
