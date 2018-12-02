/**
 * Created by Administrator on 2015/12/3.
 */
var express=require('express');
var app=express();

//var http=require('http');
//http.createServer(app).lisren(8080);

app.use(express.static(__dirname))
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/http;charset=utf-8');
    next();
});

app.listen(8080);

