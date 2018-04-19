export class EventFormView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render() {
        return `<fieldset class="new-meeting">
            <legend>Event topic:</legend>
            <input class="event-topic" type="text" name="event-topic" value=${this.controller.event.topic}>
            <input class="event-time" type="time" name="event-time" step="1" value=${this.controller.event.time}>
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
        this.element.querySelector('.event-time')
            .addEventListener('change', this.controller.handleEventTimeChange.bind(this.controller));
    }
}