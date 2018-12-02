/**
 * Created by Administrator on 2015/12/2.
 */
var http=require('http');
var url=require('url');
var querystring=require('querystring');
var users=[];
var fs=require('fs');

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
   // console.log(pathname)
    if(pathname=='/if(pathname='){
        console.log('头部图标')
        return false;
    }else if(pathname=='/'){
        fs.createReadStream('index.html').pipe(res);
    }else if(pathname=='/reg'){
        var contentType=req.headers['content-type'];//请求头的type
       // console.log(req.headers['content-length']);
        req.setEncoding('utf8');

        if(hashBody(req)){
            var result='';
            req.on('data',function(chunk){
                result+=chunk
            });
            req.on('end',function(){
                if(contentType=='application/json'){
                    console.log(result)
                    req.body=JSON.parse(result);

                }else if(contentType=='application/x-www-form-urlencoded'){
                    console.log(222)
                    req.body=querystring.parse(result);
                }
                res.end(JSON.stringify(req.body));
            })
        }else{
            res.end('什么都木有')
        }

    }
    function hashBody(req){
        return req.headers['content-length']
    }
}).listen(8080);
