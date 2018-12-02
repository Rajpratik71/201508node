/**
 * Created by Administrator on 2015/12/1.
 */

var fs=require('fs');
//var ws=fs.createWriteStream('./128k.txt');
//
//for(var i=0;i<100000;i++){
//    var flag=ws.write(i+'');
//   // console.log(flag)
//}
//
//ws.on('drain',function(){
//    console.log('消化完了')
//})


function copy(src,desc){
    var rs=fs.createReadStream(src);
    var ws=fs.createWriteStream(desc);
    rs.on('data',function(data){
        rs.pause();
        var flag=ws.write(data);
       // console.log(flag)
    })
    ws.on('drain',function(){
        console.log('hehe')
        rs.resume()
    });
    rs.on('end',function(){

    })
}
//copy('128k.txt','hehe.txt')

function copy2(src,desc){
    var rs=fs.createReadStream(src);
    var ws=fs.createWriteStream(desc);
    rs.pipe(ws);
}
copy2('128k.txt','hehe')



