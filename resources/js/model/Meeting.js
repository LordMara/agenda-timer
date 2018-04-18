import {Event} from "./Event.js";

export class Meeting {
    constructor(id, name, events) {
        this._id = id;
        this._name = name;
        this._events = events;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get events() {
        return this._events;
    }

    set id(id) {
        this._id = id;
    }

    set name(name) {
        this._name = name;
    }

    set events(events) {
        this._events = events;
    }

    render() {
        return `<div id="meeting">
                    <p id="name">${this.name}</p><p id="time">${this.renderTime()}</p>
                </div>
                <div id="events">
                    <ul>
                        ${this.renderEvents()}
                    </ul>
                </div>`
    }

    renderEvents() {
        let renderedEvents = '';
        for (let event of this.events) {
            renderedEvents += event.render();
        }
        return renderedEvents;
    }

    addEvent(event) {
        this.events.push(event);
    }

    removeEvent(eventId) {
        let filteredEvents = [];
        for (let event of this.events) {
            if (event.id !== id) {
                filteredEvents.push(event);
            }
        }
        this.events = filteredEvents;
    }

    estimatedTime() {
        let time = 0;
        for (let event of this.events) {
            time += event.time;
        }
        return time;
    }

    static createFromObject(obj) {
        let meeting = new Meeting();
        meeting.id = obj._id;
        meeting.name = obj._name;
        meeting.events = this.createEventsFromObject(obj);

        return meeting;
    }

    static createEventsFromObject(obj) {
        let events = [];
        for (let event of obj._events) {
            let newEvent = Event.createFromObject(event);
            events.push(newEvent);
        }
        return events;
    }
}

