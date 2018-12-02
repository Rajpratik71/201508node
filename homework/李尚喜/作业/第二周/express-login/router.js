/**
 * Created by Administrator on 2015/12/1.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//Multer是一个nodejs中间件，用来处理http提交multipart/form-data，也就是文件上传
var multer = require('multer');

var app = express();
app.set('view engine','html');
app.set('views','view');
app.engine('.html',require('ejs').__express);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')//存储的目的地
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });
app.use(bodyParser.urlencoded({extended:true}));
app.get('/reg',function(req,res){
    res.render('reg',{title:'注册'});
});
app.listen(8080);