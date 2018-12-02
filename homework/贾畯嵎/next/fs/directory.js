/**
 * Created by Administrator on 2015/11/30.
 */


var fs=require('fs');
var path=require('path');
//path.s


/*
*d rwx rex rex
*r read 读取   4
*w write 写入  2
* x  执行  1
* */
/*fs.mkdir('a/text55',0666,function(err){//创建目录 0666 可读写
    if(err){
       // console.log(err)

        if(err.errno==(-4058)){
           // console.log(err)
          gitpath(err.path,err.path);

        }
        return false;
    }
});*/
function gitpath(pathsrc,old){
    fs.exists(pathsrc,function(exists){
        if(exists){
           // pathsrc= old.substring(0,old.indexOf(path.sep,pathsrc.length+1))
            console.log(pathsrc)
            while(old!=pathsrc){

                var ls=old.indexOf(path.sep,pathsrc.length+1);
                if(ls==-1){
                    pathsrc=old;
                }else{
                    pathsrc=old.slice(0,ls);
                }
                fs.mkdirSync(pathsrc,0666);

            }
            return;
        }else{
            var lastIndex=pathsrc.lastIndexOf(path.sep);
            pathsrc=pathsrc.substring(0,lastIndex);
           gitpath(pathsrc,old)
        }
    })
}


fs.readdir('./',function(err,files){//读取此目录下面的所有文件和文件夹
    if(err){
        console.log(err)
    }else{
       // console.log(files);
    }
});
/**
 * //查看一个文件或目录详情
 * size 文件大小
 * atime access time 最后一次访问时间
 * mtime modify time 最后一次修改时间
 * ctime create time
 * birthtime  创建的时间
 */
fs.stat('./',function(err,stat){
    console.log(stat)
});
fs.exists('b',function(exists){//判断文件是否存在
    console.log(exists);
})





