var util = require('util'); 
//util모듈의 inherits()메소드 사용시 상속을 쉽게 정의할 수 있음.

var EventEmitter = require('events').EventEmitter;
//EventEmitter은 events모듈에 속성으로 정의되어 있음.
//require()메소드를 호출하여 events모듈을 불러들인 후, 그 안에 속성으로 들어 있는 EventEmitter 객체를 참조.

//Calc라는 객체 선언(prototype)
var Calc = function (){
    var self =this;

    //stop이벤트 정의
    this.on('stop',function(){
        console.log("Calc에 Stop Event 전달됨");
    });
}

//Calc객체가 이벤트를 처리할 수 있도록 EventEmitter를 상속하도록 함.
util.inherits(Calc, EventEmitter);
Calc.prototype.add = function(a,b) {
    return a+b;
}

module.exports = Calc;
module.exports.title = "calculator";