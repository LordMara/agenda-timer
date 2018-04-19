"use strict";

import {Event} from "./model/Event.js";
import {Meeting} from "./model/Meeting.js";
import {NewButtonController} from "./addmeeting/NewMeetingButtonsController.js"
import {NewMeetingsButtonsView} from "./addmeeting/NewMeetingsButtonsView.js";
import {EventFormView} from "./addmeeting/eventform/EventFormView.js";
import {EventFormController} from "./addmeeting/eventform/EventFormController.js";

let meeting = new Meeting(1 , "test", new Array());
let buttonsController = new NewButtonController(meeting);
let buttonsView = new NewMeetingsButtonsView(buttonsController);

// load existing meetings from local storage

// load first form
let event = new Event();
let formController = new EventFormController(event, meeting);
let formView = new EventFormView(formController);
let container = document.querySelector("#form-container-inner");
container.appendChild(formView.element);