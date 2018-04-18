"use strict";

import {Event} from "./model/Event.js";
import {Meeting} from "./model/Meeting.js";
import {NewButtonController} from "./addmeeting/NewMeetingButtonsController.js"
import {NewMeetingsButtonsView} from "./addmeeting/NewMeetingsButtonsView.js";
import {FormView} from "./addmeeting/FormView.js";
import {FormController} from "./addmeeting/FormController.js";


let meeting = new Meeting(1 , "test", new Array());
let buttonsController = new NewButtonController(meeting);
let buttonsView = new NewMeetingsButtonsView(buttonsController);

// load existing meetings from local storage

// load first form
let event = new Event();
let formController = new FormController(event, meeting);
let formView = new FormView(formController);
let container = document.querySelector("#form-container-inner");
container.appendChild(formView.element);