export class Timer {
    constructor(time) {
        this._total = time;
        this._current = 0;
    }

    set total(time) {
        this._total = time;
    }

    set current(time) {
        this._current = time
    }

    get total() {
        return this._total;
    }

    get current() {
        return this._current;
    }
}