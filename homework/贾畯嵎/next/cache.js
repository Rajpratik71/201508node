/**
 * Created by Administrator on 2015/12/3.
 */


var http=require('http');
var fs=require('fs');
var crypto=require('crypto');
http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return res.end();
    }
    var filename=req.url.slice(1);
    //console.log(filename+'sss');
   // matchHandler(filename,req,res)计算的是最后的修改时间
    //etagHandler(filename,req,res)//根据实体的内容生成的一段字符中。可以标识资源的状态。
    //etag是服务器生成的，发送给客户端，客户端不关心你的etag如何生成的

    expirhandler(filename,req,res)


}).listen(8080);



function matchHandler(filename,req,res){
    //获取请求过来的缓存文件的最后修改时间
    var lastmodified=new Date(req.headers['if-modified-since']);
    fs.stat(filename,function(err,stat){//文件的详细信息
        if(stat.mtime.getTime()-lastmodified.getTime()<=1000){
            res.statusCode=304;
            res.end('');
        }else{
            res.setHeader('Last-Modified',stat.mtime.toGMTString());
            res.writeHead(200);
            fs.createReadStream(filename).pipe(res);
        }
    })
}

function etagHandler(filename,req,res){
    //console.log(filename)
    fs.readFile(filename,function(err,chunk){
       // console.log(chunk)
        var hash=gethash(chunk)//计算文件最新的md5值
        var nomematch=req.headers['if-none-match']
       console.log(chunk)
        if(hash==nomematch){
            res.statusCode=304;
            res.end();
        }else{
            res.setHeader('Etag',hash);
            res.end(chunk);
        }

    })
}
function gethash(str){
    return crypto.createHash('sha1').update(str).digest('base64');// hex base64 utf8  ascii
}

function expirhandler(filename,req,res){
    fs.readFile(filename,function(err,content){
        res.setHeader('Expires',new Date(new Date().getTime()+600*1000).toUTCString());
        res.setHeader('Cache-Control','max-age=600');
        res.statusCode = 200;
        res.end(content);

    })
}