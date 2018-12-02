/**
 * Created by Administrator on 2015/12/1.
 */


var util=require('util');
var EventEmitter=require('events');

util.inherits(Counter,EventEmitter);

function Counter(){
    EventEmitter.call(this);
    this._max=10;
    this._pos=1;
}

Counter.prototype._read=function(){
    var i=this._pos++;
    if(i>this._max){
        return null
    }else{
        return i+'I'
    }
}
var counter=new Counter();

