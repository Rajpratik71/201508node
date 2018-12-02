var net=require('net');
var fs=require('fs');
var socket=net.connect(8080,'127.0.0.1');
socket.on('data',function(chunk){
    console.log(chunk.toString());
});
socket.write('1');