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

