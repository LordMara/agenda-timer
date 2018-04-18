export class Event {
    constructor(topic, time) {
        this._topic = topic;
        this._time = time;
    }

    get topic() {
        return this._topic;
    }

    set topic(topic) {
        this._topic = topic;
    }

    get time() {
        return this._time;
    }

    set time(time) {
        this._time = time;
    }

    render() {
        return `<li>
                    <p id="name">${this.topic}</p><p id="time">${this.renderTime()}</p>
                </li>`;
    }

    renderTime() {
        let s = Math.floor(this.time/100);
        let h = 0;
        let m = 0;

        while (s > 60) {
            s /= 60;
            m += 1;
        }
        s = Math.floor(s);

        while (m > 60) {
            m /= 60;
            h += 1;
        }
        m = Math.floor(m);

        return `${h}h ${m}m ${s}s`
    }

    static createFromObject(obj){
        let event = new Event();
        Object.assign(event, obj);
        return event;
    }
}
