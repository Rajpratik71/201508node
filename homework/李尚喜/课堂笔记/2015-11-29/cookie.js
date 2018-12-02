/**
 * Created by Administrator on 15-11-29.
 */


var http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/favicon.ico'){
        return res.end('404');
    }else if(pathname == '/write'){
        //res.setHeader('Set-Cookie','name=lishangxi,path=/');
        res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8','Set-Cookie':['name=lishangxi','isAdimin=1']});
        res.end('hello');
    }else if(pathname == '/read'){
        var cookie = req.headers.cookie;
        var cookieObj = querystring.parse(cookie,'; ');
        res.setHeader('Content-Type','text/html;charset=utf-8');
        if(cookieObj.name){
            res.end('欢迎老同学');
        }else{
            res.end('欢迎新同学');
        }

    }
}).listen(8090);