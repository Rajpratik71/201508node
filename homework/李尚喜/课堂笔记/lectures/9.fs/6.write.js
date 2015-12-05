/**
 * 1.打开文件
 * 2.写文件
 * write
 *   fd 文件描述符
 *   buffer buffer对象
 *   offset 是从缓存区哪个位置开始读
 *   length 读多少个字节
 *   position 写入文件的起始位置
 *   callback
 * 3.关闭文件
 */
/*var fs = require('fs');
fs.open('./msg.txt','w',function(err,fd){
    console.log(fd);
    var buffer = new Buffer('珠峰培训');
    fs.write(fd,buffer,6,6,0,function(err,bytesWritten,buff){
        console.log('成功写入了'+bytesWritten+'字节');
        fs.write(fd,buffer,0,6,6,function(err,bytesWritten,buff){
            console.log('成功写入了'+bytesWritten+'字节');
            fs.close(fd);
        });
    });

});*/


var fs = require('fs');
fs.open('./read.txt','w',function(err,fd){
    var buffer = new Buffer('李尚喜');
    fs.write(fd,buffer,0,3,0,function(err,bytesWrite,buffer){
        console.log('写入'+bytesWrite+'字节');

        fs.write(fd,buffer,3,3,3,function(err,bytesWrite,buffer){
            console.log('写入'+bytesWrite+'字节');
            fs.write(fd,buffer,6,3,6,function(err,bytesWrite,buffer){
                console.log('写入'+bytesWrite+'字节');
                console.log(buffer.toString());
                fs.close(fd,function(){
                    console.log(fd+'已关闭');
                })
            })
        })
    })
});
