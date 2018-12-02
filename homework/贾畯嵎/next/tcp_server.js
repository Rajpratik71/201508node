/**
 * Created by Administrator on 2015/12/1.
 */

var net=require('net');
var fs=require('fs');

var ws=fs.createWriteStream('tcp.log');
net.createServer(function(socket){
    //ws.write(JSON.stringify(socket))
    console.log(socket.address)//function
    socket.setEncoding('utf8');
    socket.on('data',function(data){
       console.log( data);
        ws.write(data);
        socket.write(data);

    });
    socket.on('end',function(){
        console.log('end')
    })
    socket.on('close',function(){
        console.log('close');
        socket.destroy();
    })

}).listen(8080)
