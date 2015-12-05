/**
 * 写文件用writeFile
 */
var fs = require('fs');
fs.writeFile('./read.txt','第一行',{encoding:'utf8',flag:'a'},function(err){
    console.error(err);
})

fs.appendFile('./read.txt','第一行',function(err){
    if(err)
        console.log(err);
})
//复制a.jpg到b.jpg

var d = fs.readFileSync('./mg.gif');
console.log(d);

//var fs = require('fs');

/*fs.readFile('msg.txt', function(err, data){
    if(err){
        console.error(err);
    }else{
        fs.writeFile('msg2.txt', data, function(err){
            if(err){
                console.log(err)
            }
        })
    }
});*/

fs.readFile('msg.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        fs.writeFile('msg2.txt',data,function(err){
            if(err){
                console.log(err);
            }
        })
    }
});
