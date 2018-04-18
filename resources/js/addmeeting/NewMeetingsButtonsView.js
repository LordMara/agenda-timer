export class NewMeetingsButtonsView {
    constructor(controller) {
        this.controller = controller;
        this.registerEventListeners();
    }

    registerEventListeners() {
        document.querySelector("#add-event").addEventListener("click", this.controller.handleAddEvent.bind(this.controller));
    }
}