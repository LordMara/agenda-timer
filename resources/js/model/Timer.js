export class Timer {
    constructor(meetingTime, meetingClock, eventsTimes, eventClocks) {
        this._meetingTime = meetingTime;
        this._meetingClock = meetingClock;
        this._eventsTimes = eventsTimes;
        this._eventClocks = eventClocks;
        this._eventIndex = 0;
    }

    countdown() {
        this._meetingTime -= 1000;
        this._eventsTimes[this._eventIndex] -= 1000;
    }

    setClocks() {
        this._meetingClock.innerHTML = Timer.renderTime(this._meetingTime);
        this._eventClocks[this._eventIndex].innerHTML = Timer.renderTime(this._eventsTimes[this._eventIndex]);
    }

    hasEventEnded() {
        return this._eventsTimes[this._eventIndex] <= 0;
    }

    nextEvent() {
        if (this.hasNextEvent()) {
            this._eventIndex += 1;
        }
    }

    hasNextEvent() {
        return this._eventIndex < this._eventsTimes.length;
    }

    hasFinished() {
        return this._meetingTime <= 0;
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
