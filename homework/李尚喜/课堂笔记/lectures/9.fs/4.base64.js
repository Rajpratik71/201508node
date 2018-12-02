/**
 * base64编码是把3个8位字节(3*8=24) 转化为4个6位字节(4*6=24)
 * 1. 得到16进制的数字
 * 2. 把16进制转成10进制
 * 3. 把10进制转成二进制
 * 4. 把8位字节拆成6位字节，每字节前面加00
 * 5. 把6位字节转成10进制
 * 6. 用此10进制数字作为索引取得对应的字符拼成一个字符串就是最终的base64编码
 */
var buf = new Buffer('a.jpg');
console.log(buf);//<Buffer e7 8f a0>
console.log(parseInt("e7",16),' ',parseInt("8f",16),' ',parseInt("a0",16));
//231 143 160
console.log((231).toString(2),(143).toString(2),(160).toString(2));
// 11100111 10001111 10100000
// 111001   111000   111110   100000
// 00111001 00111000  00111110 00100000
console.log(parseInt("00111001",2),parseInt("00111000",2),parseInt("00111110",2),parseInt("00100000",2));
/*var sum =0;
for(var i=0;i<6;i++)
sum+=Math.pow(2,i)
console.log(sum);
console.log(Math.pow(2,6)-1);*/
// 0 - 63
// 57 56 62 32
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
console.log(str[57]+str[56]+str[62]+str[32]);
//54+g

function getBase64(url){
    var baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var buf = new Buffer(url);
    var temp ='';
    var base64Result = '';
    for(var i=0;i<buf.length;i++){
        temp+=buf[i].toString(2); //buf[i]转化成了10进制 ,toString(2)转化成了二进制
    }
    //console.log(temp);
    var arr10=[];
    var j=0;
    while (j<temp.length){
        arr10.push(parseInt('00'+temp.slice(j,j+6),2)); //每6位拆分一次，并且在前面加上两个0.   parseInt(x,2)讲二进制转化为10进制。
        j+=6;
    }
    //console.log(arr10);
    for(var k=0;k<arr10.length;k++){
        base64Result+=baseStr[arr10[k]];
    }
    //console.log(base64Result);
    return base64Result;
}

console.log(getBase64('珠峰培训'));