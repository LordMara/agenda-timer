import {Timer} from "../model/Timer.js";

export class EventView {
    constructor(event) {
        this._event = event;
    }

    render() {
        return `<li>
                    <p id="name">${this._event.topic}</p><p id="time">${Timer.renderTime(this._event.time)}</p>
                </li>`;
    }
}