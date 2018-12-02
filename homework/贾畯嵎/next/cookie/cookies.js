/**
 * Created by Administrator on 2015/12/3.
 */

//path 访问哪些路劲可以发送cookie  path=a
//    domain 置顶cookie会发送到哪些页面 domain=b.zfpx.cn
//    expires  Expires="+new Date(new Date().getTime()+3600*1000).toGMTString()
    //max-age指定cookie的失效时间，如果没有指定失效时间，那么cookie不会写入硬盘，只持续到会话结束(浏览器关闭)
/*
 //response.setHeader("Set-Cookie","name=zfpx; Max-Age=20");
 //response.setHeader("Set-Cookie","name=zfpx; HttpOnly");
httpOnly
*    不能在js里操作cookie
*
*
*    */
var http=require('http');
var url=require('url');
var querystring=require('querystring');
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/favicon.ioc'){
        return req('404')
    }
    if(pathname=='/write'){

       // res.writeHead(200,{'Content-Type':'text/html','Set-Cookie':['name=zfpx','age=6']});
        res.writeHead(200,{'Content-Type':'text/html','SetCookie':['name=myname','age=18']})
        res.end('设置cookie');
    }else{
        var cookie=req.headers.cookie;
        var cookieObj=querystring.parse(cookie,'; ');
        res.setHeader('Content-Type','text/html;charset=utf-8');

        if(cookieObj.name){
            res.end('你好老朋友');
        }else{
            res.end('你好新朋友');
        }
    }
}).listen(8080)
