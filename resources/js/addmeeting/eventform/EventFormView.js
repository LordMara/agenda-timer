export class EventFormView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render() {
        return `<fieldset class="new-meeting">
            <legend>Event topic:</legend>
            <input class="event-topic" type="text" name="event-topic" value='${this.controller.event.topic}'>
            
            <legend>Hours:</legend>
            <input class="event-hours" type="number" name="event-hours" min="0" value=${this.controller.hours}>
            
            <legend>Minutes:</legend>
            <input class="event-minutes" type="number" name="event-minutes" min="0" max="60" value=${this.controller.hours}>
        </fieldset>`;
    }

    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        this.element.querySelector('.event-topic')
            .addEventListener('change', this.controller.handleEventTitleChange.bind(this.controller));
        this.element.querySelector('.event-hours')
            .addEventListener('change', this.controller.handleHoursChange.bind(this.controller));
        this.element.querySelector('.event-minutes')
            .addEventListener('change', this.controller.handleMinutesChange.bind(this.controller));
    }
}