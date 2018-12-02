/**
 * Created by Administrator on 2015/12/1.
 */

var fs=require('fs');
var path=require('path');

/*
*  normalize  转成 正常规范的 标准路径
*
*
* */

console.log(path.normalize('../fs'));//../fs

//json 将多个参数值自趺床结合成一个人路劲字符串

console.log(path.join('../','fs','a'));//..\fs\a

//basename 获取一个路劲的文件名
console.log(path.basename('../fs/read.txt'))//read.txt
console.log(path.basename('../fs/read.txt','.txt'))//read

console.log(path.extname('../fs/read.txt'))//.txt

console.log(path.sep);
console.log(path.delimiter);
