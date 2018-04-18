export class Timer {
    constructor(time, mainTime, clock, mainClock) {
        this._time = time;
        this._clock = clock;
        this._mainTime = mainTime;
        this._mainClock = mainClock;
        this._timer = null;
    }

    countdown() {
        this._time -= 1000;
        this._mainTime -= 1000;
    }

    setClocks() {
        this._clock.innerHTML = Timer.renderTime(this._time);
        this._mainClock.innerHTML = Timer.renderTime(this._mainTime);
    }

    isRunning() {
        return this._time > 0;
    }

    hasFinished() {
        return this._time <= 0;
    }

    static renderTime(time) {
        let s = time/1000;
        let h = 0;
        let m = 0;

        while (s >= 60) {
            s -= 60;
            m += 1;
        }

        while (m >= 60) {
            m -= 60;
            h += 1;
        }
        return `${h}h ${m}m ${s}s`
    }
}