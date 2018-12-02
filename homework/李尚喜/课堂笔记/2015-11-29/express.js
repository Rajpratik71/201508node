/**
 * Created by Administrator on 15-11-29.
 */

var express = require('express');

var app = express();
app.use(express.static(__dirname));
app.use(function(req,res,next){
    console.log(req.host,req.path);
    res.end();
});

app.listen(8090);