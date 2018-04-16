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
    
}

