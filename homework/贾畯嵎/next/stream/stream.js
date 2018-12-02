/**
 * Created by Administrator on 2015/12/1.
 */

var fs=require('fs');
//var buff=new Buffer(1024*128);
//fs.open('128k.txt','r+',function(err,fd){
//    fs.write(fd,buff,0,buff.length,0,function(err,size,buffer){
//        console.log(size)
//        fs.close(fd)
//    })
//
//})
var rs=fs.createReadStream('128k.txt');

rs.on('open',function(){
    console.log('文件打开了')
});

rs.on('data',function(data){
    console.log('开始')
    rs.pause()//暂停流的发射事件
    process.nextTick(function(){
        console.log('消化')
        rs.resume()//重新开始流
    })
});
rs.on('end',function(){
    console.log('文件读取完毕')
});
rs.on('close',function(){
    console.log('文件关闭了')
});
rs.on('error',function(err){
    console.log(err)
});
