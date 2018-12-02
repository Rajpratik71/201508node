/**
 * Created by Administrator on 2015/11/30.
 */

var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    fs.readFile('./img/1.jpg',function(err,data){
        if(err){
            console.log(err)
        }else{
            var buffer=new Buffer(data);//.toString('base64');
            var str='';
            var Zero=['0','00','000','0000','00000','000000','0000000']
            for(var i=0;i<buffer.length;i++){
                var ss=buffer[i].toString(2);
                if(ss.length<8){
                    ss=Zero[7-ss.length]+ss
                }
                str+=ss;
                //console.log(str)
            }

            var index=0;
            var bease64Str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var bease='';
            console.log(str)
            //while(index<=str.length/6){
            //    bease+=bease64Str[parseInt(('00'+str.substring(index,index+6)),2)];
            //    // console.log(index);
            //    index+=6;
            //}
            str.replace(/\d{6}/g,function(datastr){
                console.log(datastr)
                bease+=bease64Str[parseInt(('00'+datastr),2)]
            });
            //console.log(bease)
            var basePo=buffer.toString('base64')
           console.log(basePo)

            console.log(bease)
            //console.log(basePo==bease)
           res.end('<img src="data:image/png;base64,'+bease+'"/>' +
               '<img src="data:image/png;base64,'+basePo+'"/>')

        }

    })



});
server.listen(8080);


