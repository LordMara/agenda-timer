export class EventFormController {
    constructor(event, meeting) {
        this.event = event;
        this.meeting = meeting;
        this.meeting.addEvent(event);
        this._hours = 0;
        this._minutes = 0;
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        this._hours = value;
    }

    get minutes() {
        return this._minutes;
    }

    set minutes(value) {
        this._minutes = value;
    }

    handleEventTitleChange(e) {
        this.event.topic = e.target.value;
    }

    handleHoursChange(e) {
        this.event.time -= this._hours * 36 * 1000 * 100;
        this._hours = parseInt(e.target.value);
        this.event.time += this._hours * 36 * 1000 * 100;
        console.log(this);
    }

    handleMinutesChange(e) {
        this.event.time -= this._minutes * 60 * 1000;
        this._minutes = parseInt(e.target.value);
        this.event.time += this._minutes * 60 * 1000;
    }
}