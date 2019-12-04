"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_likes, _state) {
        this._likes = _likes;
        this._state = _state;
    }
    Like.prototype.like = function () {
        this._likes += (this.state) ? -1 : 1;
        this._state = !this._state;
    };
    Object.defineProperty(Like.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.print = function () {
        console.log("likes:" + this._likes + ", state:" + this._state);
    };
    return Like;
}());
exports.Like = Like;
