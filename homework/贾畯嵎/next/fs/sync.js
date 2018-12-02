/**
 * Created by Administrator on 2015/11/30.
 */


var fs=require('fs');

/**
 * node.js中，使用fs实现文件的读写，目录的创建，变化的监控
 * 所有的方法都有同步和异步两种实现
 * Sync 结尾的都是同步方法 方法的返回值
 * 不带Sync的都是异步方法 回调
 */

var data=fs.readFileSync('./read',{encoding:'utf8'});

//console.log(data);

fs.readFile('./read','utf-8',function(err,data){
    //console.log(data)
    if(err){
        console.log(err);
    }else{
        fs.writeFile('./read.txt',data,function(err){
            console.log(err)
        })
    }
});

