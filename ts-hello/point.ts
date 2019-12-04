export class Point {
    //we can only have 1 constructor in TS
    constructor(private _x: number, private _y?: number) {
        //y is optional
    }

    draw() {
        console.log(this._x + ' ' + this._y);
    }

    getDistance(another: Point) {
        //...
    }
}