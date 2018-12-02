
var http=require('http');
var url=require('url');


http.createServer(function(req,res){
    //req 请求
//    res 响应
    var urlObj=url.parse(req.url,true);
    console.log(req.method);//请求方式 get post
   // console.log(req.headers)
/* { host: '127.0.0.1:8080',
 connection: 'keep-alive',
 'cache-control': 'max-age=0',
 accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*!/!*;q=0.8',
 'upgrade-insecure-requests': '1',
 'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
 'accept-encoding': 'gzip, deflate, sdch',
 'accept-language': 'zh-CN,zh;q=0.8' }*/
    console.log(req.httpVersion)//http 的版本
    req.on('data',function(chunk){
        console.log(chunk)
    });
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('hellow world');
    res.write('<h1>您好</h1>')
    res.end();
}).listen(8080);