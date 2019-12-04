export class Like {
    constructor(private _likes?: number, private _state?: boolean) { }

    like() {
        this._likes += (this.state) ? -1 : 1;
        this._state = !this._state;
    }

    get likes() {
        return this._likes;
    }

    get state() {
        return this._state;
    }

    print() {
        console.log(`likes:${this._likes}, state:${this._state}`);
    }
}