export class MeetingFormView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render() {
        return `<form>
            <fieldset class="new-meeting">
                <legend>Meeting name:</legend>
                <input class="meeting-name" type="text" name="meeting-name" value='${this.controller.meeting.name}'>
            </fieldset>
        </form>`;
    }

    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        this.element.querySelector('.meeting-name')
            .addEventListener('change', this.controller.handleMeetingNameChange.bind(this.controller));
    }
}