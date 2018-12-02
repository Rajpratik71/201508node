/**
 * Created by Administrator on 2015/11/30.
 */


var fs=require('fs');
//打开文件
var fd=fs.openSync('read','r+');

console.log(fd);
var buffer=new Buffer(30);
//fs.readSync(fd, buffer, offset, length, position)
fs.readSync(fd,buffer,0,30,0)
console.log(buffer.toString());
//关闭文件
fs.closeSync(fd);