/**
 * Created by Administrator on 15-11-29.
 */

var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    console.log(req.url);
    res.write('hello');
    res.end();
});
server.listen(8090,'localhost');