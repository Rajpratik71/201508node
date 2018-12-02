/**
 * Created by Administrator on 2015/12/4.
 */
var express=require('express');
var path=require('path');
var bodyParse=require('body-parser');
var multer=require('multer');
var app=express();
app.set('view engine','html');
app.set('views','view');
app.engine('.html',require('ejs').__express);

//
//var storage=multer.diskStorage({
//    destination:function(req,file,cb){
//        cb(null,'uploads');
//    },
//    filename:function(req,file,cb){
//        cb(null,file.originalname)
//    }
//
//});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')//存储的目的地
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});


//var upload = multer({storage:storage});
var upload = multer({ storage: storage });
app.use(bodyParse.urlencoded({extended:true}));

app.get('/reg',function(req,res){
    res.render('reg',{})
});
app.post('/reg',upload.array('avatar',12),function(req,res){//多个

//app.post('/reg',upload.single('avatar'),function(req,res){//单个
    console.log(req.files);
    res.send(req.body)
})

app.listen(8080);
