export class FormController {
    constructor(event, meeting) {
        this.event = event;
        this.meeting = meeting;
        this.meeting.addEvent(event);
    }

    handleEventTitleChange(e) {
        this.event.title = e.target.value;
    }

    handleEventTimeChange(e) {
        this.event.time = e.target.value;
    }
}