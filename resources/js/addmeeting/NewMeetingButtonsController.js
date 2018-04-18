import {Event} from "../model/Event.js";
import {FormView} from "./FormView.js";
import {FormController} from "./FormController.js";

export class NewButtonController {
    constructor(meeting) {
        this.meeting = meeting;
    }

    handleAddEvent(e) {
        let event = new Event();
        let formController = new FormController(event, this.meeting);
        let formView = new FormView(formController);
        let container = document.querySelector("#form-container-inner");
        container.appendChild(formView.element);
    }

    handleSubmit(e) {
    }
}
