import {EventView} from "./EventView.js";
import {Timer} from "../model/Timer.js";

export class MeetingView {
    constructor(meeting) {
        this._meeting = meeting;
    }

    render() {
        return `<div id="meeting">
                    <p id="name">${this._meeting.name}</p><p id="time">${Timer.renderTime(this._meeting.estimatedTime())}</p>
                </div>
                <div id="events">
                    <ul>
                        ${this.renderEvents()}
                    </ul>
                </div>`
    }

    renderEvents() {
        let list = '';
        for (let event of this._meeting.events) {
            list += new EventView(event).render();
        }
        return list;
    }

    createElement() {
        document.getElementById('container').innerHTML = this.render();
    }
}