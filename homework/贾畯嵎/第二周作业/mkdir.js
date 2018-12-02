/**
 * Created by Administrator on 2015/12/4.
 */

var fs=require('fs');
var path=require('path');


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
        gitpath(err.path,err.path)
    }else{

        // console.log(files);
    }
});
