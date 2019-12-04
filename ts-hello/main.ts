import {Point} from './point';
import {Like} from './like';

function log(message) {
    console.log(message);
}

let message = 'Hello world';
log(message);

function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

doSomething();

enum Color { Red, Green, Blue };
let backgroundColor = Color.Blue;

console.log('BackgroundColor: ' + backgroundColor);

let doLog = (msg) => console.log(msg);
doLog('test');

// let point = new Point(1, 2);
// point.draw();

let like = new Like(3, false);
like.print();
like.like();
like.print();
like.like();
like.print();