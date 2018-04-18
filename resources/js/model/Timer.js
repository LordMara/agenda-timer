export class Timer {
    constructor(time, mainTime, clock, mainClock) {
        this._time = time;
        this._clock = clock;
        this._mainTime = mainTime;
        this._mainClock = mainClock;
        this._timer = null;
    }
}