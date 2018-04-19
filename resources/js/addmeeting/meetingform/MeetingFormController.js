export class MeetingFormController {
    constructor(meeting) {
        this.meeting = meeting;
    }

    handleMeetingNameChange(e) {
        this.meeting.name = e.target.value;
    }
}
