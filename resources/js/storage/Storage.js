import {Meeting} from "../model/Meeting.js";

class Storage {
    constructor(){
        this._meetings = new Set();
        this.load();
    }


    get meetings() {
        return this._meetings;
    }

    set meetings(value) {
        this._meetings = value;
    }

    add(meeting){
        this._meetings.add(meeting);
        this.save();
    }

    remove(meeting){
        this._meetings.delete(meeting);
        this.save();
    }

    getId() {
        let id = 1;
        for (let meeting of this._meetings) {
            if (meeting.id > id) {
                id = meeting.id;
            }
        }
        return id;
    }

    save(){
        localStorage.setItem('meetings', JSON.stringify([...this._meetings]))
    }

    load(){
        let meetings = JSON.parse(localStorage.getItem('meetings'));
        if(meetings !== null){
            for(let meeting of meetings){
                this.compereAdd(Meeting.createFromObject(meeting));
            }
        }
    }

    compereAdd(meeting) {
        if (!this.compereMeetings(meeting)) {
            this._meetings.add(meeting);
        }
        this.save();
    }

    compereMeetings(meeting) {
        for (let existingMeeting of this._meetings) {
            if (meeting.id === existingMeeting.id && meeting.name === existingMeeting.name &&
                    meeting.events.length === existingMeeting.events.length) {
                return true;
            }
        }
        return false;
    }
}

export let storage = new Storage();
