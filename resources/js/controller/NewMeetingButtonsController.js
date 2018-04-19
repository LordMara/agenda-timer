import {Event} from "../model/Event.js";
import {EventFormView} from "../view/EventFormView.js";
import {EventFormController} from "./EventFormController.js";

import {storage} from "../storage/Storage.js";

export class NewButtonController {
    constructor(meeting) {
        this.meeting = meeting;
    }

    handleAddEvent(e) {
        let event = new Event("Edit me!", 0);
        let formController = new EventFormController(event, this.meeting);
        let formView = new EventFormView(formController);
        let container = document.querySelector("#form-container-inner");
        container.appendChild(formView.element);
    }

    handleSubmit(e) {
        storage.add(this.meeting);
        storage.save();
    }
}
