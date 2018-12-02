/**
 * Created by Administrator on 2015/11/30.
 */



var fs=require('fs');

/*{
 ino: 7881299347968542,
 size: 6,
 blocks: undefined,
 atime: Mon Nov 30 2015 17:58:00 GMT+0800 (中国标准时间),
 mtime: Mon Nov 30 2015 17:58:00 GMT+0800 (中国标准时间),
 ctime: Mon Nov 30 2015 17:58:00 GMT+0800 (中国标准时间),
 birthtime: Mon Nov 30 2015 15:24:41 GMT+0800 (中国标准时间)

  }
 {
 ino: 26458647810871844,
 size: 0,
 atime: Mon Nov 30 2015 15:27:13 GMT+0800 (中国标准时间),
 mtime: Mon Nov 30 2015 15:27:13 GMT+0800 (中国标准时间),
 ctime: Mon Nov 30 2015 15:27:13 GMT+0800 (中国标准时间),
 birthtime: Mon Nov 30 2015 15:24:41 GMT+0800 (中国标准时间) }


  */

fs.watchFile('read.txt',{interval:1000},function(oldstate,newstate){

    fs.open('read.log','r+',function(err,fd){

        var bu1=new Buffer('old :'+JSON.stringify(oldstate)+'\n new:  '+JSON.stringify(newstate))
        //var bu2=new Buffer()

        fs.write(fd,bu1,0,bu1.length,function(err,size,buff){
            if(err){
                console.log(err)
            }
            fs.closeSync(fd);
        })

    })

});