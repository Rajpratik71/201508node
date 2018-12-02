/**
 * Created by Administrator on 2015/12/4.
 */

var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var session=require('express-session');
var multer=require=('multer');
var app=express();
app.set('view engine','html');
app.set('views','view');
app.engine('.html',require('ejs').__express);

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
var upload=multer({storage:storage});
app.use(session({
    secret:'junyu',
    resave:true,
    saveUninitialized:true

}));
app.use(bodyparser.urlencoded({extended:true}));
app.get('/reg',function(req,res){
    res.render('reg',{})
});


app.post('/reg',upload.attay('avatar',12),function(req,res){
    req.session;
    res.send(req.body);
});
app.get('/login',function(req,res){
    req.sission.username='junyu';
    res.redirect('/welcome')
});
app.get('/welcome',function(req,res){
    res.send(req.session.username);
})

app.listen(8080);
