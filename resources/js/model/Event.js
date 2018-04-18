import {Timer} from "./Timer.js";

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
                    <p id="name">${this.topic}</p><p id="time">${Timer.renderTime()}</p>
                </li>`;
    }

    static createFromObject(obj){
        let event = new Event();
        Object.assign(event, obj);
        return event;
    }
}
