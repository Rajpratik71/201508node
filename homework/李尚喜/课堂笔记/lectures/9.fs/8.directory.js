/**
 * 目录
 */
var fs = require('fs');
//创建目录
/**
 * d   rwx rwx rwx
 * r read 读取     4
 * w write 写入    2
 * x  execute 执行 1
 * 所有者
 * 所属组
 * 其它人
 * 7  6  3
 */
//console.log(1,0x1,07);
// 0666 转成10进制是多少
/*fs.mkdir('./test',0666,function(err){
    if(err){
        console.log(err);
    }
});*/
/*
fs.mkdir('test6',0666,function(err){
    if(err)
        console.error(err);
});*/
/*fs.rmdir('test6',function(err){
    console.log(err);
});*/

//读取此目录下面的所有文件和文件夹
/*fs.readdir('test2',function(err,files){
    if(err){
        console.error(err);
    }else{
        console.log(files);
    }
})*/
/*fs.readdir('test2',function(err,files){
    if(err){

    }else{
        console.log(files);
        for(var i=0;i<files.length;i++){
            console.log(files[i]);
        }
    }
});*/
//查看一个文件或目录详情
/**
 * size 文件大小
 * atime access time 最后一次访问时间
 * mtime modify time 最后一次修改时间
 * ctime create time
 * birthtime  创建的时间
 */
/*fs.stat('test2/file1.txt',function(err,stat){
    console.log(stat);
})*/
//判断文件是否存在
/*fs.exists('test/file3',function(exists){
    console.log(exists);
})*/

//从相对路径获取绝对路径
/*fs.realpath('test',function(err,realpath){
    console.log(realpath);
})*/
//E:\201508node\lectures\9.fs\test
//重命名
/*fs.rename('test','test2',function(){

})*/
/*fs.rename('test6','test',function(){});*/
//截断文件
/*var path = './msg41.txt';
fs.stat(path,function(err,stat){
    console.log('开始'+stat.size);
    fs.truncate(path,6,function(err){
        fs.stat(path,function(err,stat2){
            console.log(stat2.size);
        });
    })
});*/

var path2 = './msg.txt';
//删除空目录
/*fs.rmdir('test',function(err){
    console.log(err)
})*/
//创建一个目录的时候，要保证它的父目录 存在，不然会报错
//创建子目录的时候，要先把父目录创建好
/*makeP('test/subtest',0666,function(err){
    if(err)
        console.error(err);
});*/
/*fs.mkdir('test/subtest/b/a',0666,function(err){
    console.log(err);
})*/
//创建目录
function makeP(path){
    var pathAry = path.split('/');
    var flag = true;
    fs.mkdir(path,0666,function(err){
        if(err){
            pathAry = pathAry.splice(0,pathAry.length-1);
            console.log(pathAry.length);

        }
    });
    arguments.callee();

}

makeP('test/a/b');