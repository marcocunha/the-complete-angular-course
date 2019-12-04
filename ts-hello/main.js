"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
function log(message) {
    console.log(message);
}
var message = 'Hello world';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
doSomething();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
console.log('BackgroundColor: ' + backgroundColor);
var doLog = function (msg) { return console.log(msg); };
doLog('test');
// let point = new Point(1, 2);
// point.draw();
var like = new like_1.Like(3, false);
like.print();
like.like();
like.print();
like.like();
like.print();
