/**
 * Created by Administrator on 2015/12/3.
 */


var express=require('express');
var app=express();


app.use(function(req,res,next){
    res.setHeader('Content-Type','text/http;charset=utf-8');
    console.log(1)
    next();
});

app.get('/',function(res,req){
    console.log(1)
    req.end('/')

});
var http=require('http');
http.createServer(app).listen(8080);