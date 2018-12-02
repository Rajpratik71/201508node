/**
 * Created by Administrator on 2015/12/4.
 */

var express=require('express');

var app=express();
app.set('view engine','html');
app.set('views','view');
app.engine('.html',require('ejs').__express);
app.use(express.static(__dirname));
app.get('/index.html',function(req,res){
    res.render('index',{title:'<h2>nihao</h2>',username:'<em>junyu</em>',password:'<strong>畯嵎</strong>'})
});


app.listen(8080);
