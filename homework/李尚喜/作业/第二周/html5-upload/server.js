/**
 * Created by Administrator on 2015/12/3.
 */

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var formidable = require('formidable');
var  mime = require('mime');
var fs = require('fs');

//创建服务器
var server = http.createServer(function(req,res){
    //req.url;//获取请求的字符串
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/favicon.ico'){
        return res.end('404');
    }
    if(pathname == '/'){
        fs.createReadStream('./h5.html').pipe(res);
    }else if(pathname == '/upload'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var filenames = [];
            console.log(files);
            for(var filename in files){
                console.log(filename);
                console.log(files[filename]);
                fs.createReadStream(files[filename].path).pipe(fs.createWriteStream('./upload/'+files[filename].name));
                filenames.push("/upload/"+files[filename].name);
            }

            res.end(JSON.stringify(filenames));
        });
    }else{
        res.setHeader('Content-Type',mime.lookup(pathname));
        fs.createReadStream('.'+pathname).pipe(res);
    }


});
server.listen(8080);