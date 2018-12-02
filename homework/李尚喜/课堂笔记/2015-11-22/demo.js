/**
 * Created by Administrator on 2015/11/25.
 */
/*setImmediate(function(){
    console.log('优先级最低的');
});
console.log('1');
console.log('2');
/!*
* nextTick 不重要的
* *!/
process.nextTick(function(){
    console.log('用法跟setTimeout类似，属于异步操作，优先级比 setImmediate高');
});
process.nextTick(function(){
    console.log('这是一个 nextTick');
    /!*
    * 更不重要的
    * *!/
    setImmediate(function(){
        console.log('这是一个内部的');
    })
});
process.nextTick(function(){
    console.log('这是又一个');
});
console.log('3');
console.log('4');

console.time('start');
for(var i=0;i<100;i++){
    console.log(i);
}
console.timeEnd('start');
console.log(require('./test.js').add(2,4));*/
//断言 当第一个参数为false时，才会抛出一个 断言错误
//console.assert(require('./test.js').add(1,2)==2,'44');
require('./test.js')
console.log(require.main.paths);
// require.main 当前文件这个模块
console.log(require.main === module);

var eventEmmit = require('events');
var util = require('util');
function Girl(){}
util.inherits(Girl,eventEmmit);
function Boy(name,response){
    this.name = name;
    this.response = response;
}

var boy1 = new Boy('小米',function(){
    console.log('送你一个小米');
});
var boy2 = new Boy('小苹果',function(){
    console.log('送你一个小苹果');
});

var girl = new Girl();

girl.addListener('giveMe',boy1.response);
/*girl.addListener('giveMe',boy2.response);
girl.on('giveMe',boy1.response);*/
girl.on('giveMe',boy2.response);
/*girl.setMaxListeners(2);
girl.emit('giveMe');*/

/*girl.addListener('come',boy1.response);
girl.emit('come');*/
girl.removeListener('giveMe',boy1.response);
girl.emit('giveMe');
girl.removeAllListeners('come');
girl.emit('come');
girl.once('die',function(){
    console.log('over');
});
girl.emit('die');
girl.emit('die');


