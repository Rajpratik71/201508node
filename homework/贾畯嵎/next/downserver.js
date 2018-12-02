/**
 * Created by Administrator on 2015/12/2.
 */


var net=require('net');
var fs=require('fs');
var path=require('path');

net.createServer(function(socket){
    socket.on('data',function(chunk){
        //if(chunk.test(/\r|\n/))
        if(chunk=='/n' || chunk=='/r'){
            console.log('hehe')
        }
        var filename=chunk.toString().replace(/\r|\n/,'');
        //console.log(filename+'sad科技领军ask');
        fs.exists(filename,function(exists){
            if(exists){
                var size=fs.statSync(filename).size;
                var fd=fs.openSync(filename,'r')
                var buff=new Buffer(size/10);
            }else{
                //socket.write('此文件不存在')
            }
        })
    })
}).listen(8080)
