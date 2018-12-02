/**
 * Created by Administrator on 2015/11/30.
 */

/*
*打开文件
* 写文件
*

* */


var fs=require('fs');
fs.open('read','r+',function(err,fd){//打开文件
    var buffer=new Buffer('我也是中国人');
    fs.write(fd,buffer,0,18,function(err,bytesWritten,buff){//错误，实际传进去的字符数，传进去的buffer
            if(!err){//如果没有错误 关闭文件
                fs.close(fd);
            }
    })
});
