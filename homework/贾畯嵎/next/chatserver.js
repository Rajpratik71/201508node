var net=require('net');
var util=require('util');
var client={};
server=net.createServer(function(socket){
    var nickname;
    socket.setEncoding('utf8');
    socket.write('欢迎来到聊天室，请设置昵称');
    socket.on('data',function(chunk){
        if(nickname){
            broadcast(nickname+':'+chunk)

        }else{
            nickname=chunk;
            client[chunk]=socket;
            var ss=chunk;
            ss.replace(/\n|\r/,'');
            broadcast('SYSTEM:'+ss+'来到聊天室，我们欢迎他')
        }
    });
    socket.on('close',function(){
        delete client[nickname];
        socket.destroy();
        console.log('SYSTEM:'+nickname+'永远离开了聊天室，我们怀念他')
        broadcast('SYSTEM:'+nickname+'永远离开了聊天室，我们怀念他')
    })
}).listen(8080);

function broadcast(nick){
    for(var name in client){
        client[name].write(nick)
    }
}