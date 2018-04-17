import {Meeting} from "../model/Meeting.js";

class Storage {
    constructor(){
        this._meetings = new Set();
        this.load();
    }

    add(meeting){
        this._meetings.add(meeting);
        this.save();
    }

    remove(meeting){
        this._meetings.delete(meeting);
        this.save();
    }

    save(){
        localStorage.setItem('meetings', JSON.stringify([...this._meetings]))
    }

    load(){
        let meetings = JSON.parse(localStorage.getItem('meetings'));
        if(meetings !== null){
            for(let meeting of meetings){
                this._meetings.add(Meeting.createFromObject(meeting));
            }
        }
    }
}

export let storage = new Storage();
