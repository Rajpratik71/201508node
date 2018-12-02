/**
 * Created by Administrator on 2015/12/3.
 */


var http=require('http');
var url=require('url');
var querystring=require('querystring');
var SESSION_KEY='sessionkey';
var session={};
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname='/favicon.ico'){
        return req.end()
    }else{
        var Cookie=req.headers.cookie;
        var CookieObj=querystring.parse(cookie,'; ');
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        if(cookieObj[SESSION_KEY]){
            var id=cookieObjp[SESSION_KEY]
            var obj=session[id];
            if(obj){
                if(obj.mny<=0){
                    res.end('你的余额已经不足，请及时充值')
                }else{
                    rej.mny-=10;
                    res.end('欢迎 老客户 您的余额是'+obj.mny);
                }
            }else{

            }
        }
    }





}).listen(8080)



