//ͨ�����鴴��Buffer

var buf2=new Buffer([15,16,17])
console.log(buf2);

//ͨ���ַ�������

var buf3=new Buffer("��������");
console.log(buf3)

var buf4=new Buffer("��������");
console.log("buf4:"+buf4)


var buf =new Buffer(12);
buf.write("����",0,6,"utf8");
console.log(buf.toString())


var http=require("http")