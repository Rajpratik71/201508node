/**
 * Created by Administrator on 2015/12/4.
 */
function move(src,dest){
    var buff =new Buffer(8*1024);
    var srcFd=fs.openSync(src,'r');
    var destFd=fs.openSync(dest,'w');
    var readSoFar=0;
    var writeSoFar=0;
    do{
        var read= fs.readSync(srcFd,buff,0,buff.length)
        fs.writeSync(destFd,buff,read);
    }while(read==buff.lenth);
    fs.closeSync(srcFd);
    fs.closeSync(destFd);
    fs.unlinkSync(src);

}