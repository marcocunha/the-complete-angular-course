"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    //we can only have 1 constructor in TS
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        //y is optional
    }
    Point.prototype.draw = function () {
        console.log(this._x + ' ' + this._y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
exports.Point = Point;
