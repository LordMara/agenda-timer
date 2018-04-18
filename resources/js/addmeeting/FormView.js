export class FormView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render() {
        return `<form class="new-meeting">
            <input class="event-topic" type="text" name="event-topic" value=${this.controller.event.topic}>
            <input class="event-time" type="time" name="event-time" step="1" value=${this.controller.event.time}>
        </form>`;
    }

    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        this.element.querySelector('.event-topic').addEventListener('change', this.controller.handleTitleChange.bind(this.controller));
        this.element.getElementsByClassName('.event-time').addEventListener('change', this.controller.handleTimeChange.bind(this.controller));
    }
}