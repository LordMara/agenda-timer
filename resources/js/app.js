"use strict";

import {Event} from "./model/Event.js";
import {Meeting} from "./model/Meeting.js";

import {NewButtonController} from "./addmeeting/NewMeetingButtonsController.js"
import {NewMeetingsButtonsView} from "./addmeeting/NewMeetingsButtonsView.js";

import {EventFormView} from "./addmeeting/eventform/EventFormView.js";
import {EventFormController} from "./addmeeting/eventform/EventFormController.js";

import {MeetingFormView} from "./addmeeting/meetingform/MeetingFormView.js";
import {MeetingFormController} from "./addmeeting/meetingform/MeetingFormController.js";


// load existing meetings from local storage

// get id base on local storage here
let meeting = new Meeting(1 , "test", new Array());

// create form for meeting name
let meetingFormController = new MeetingFormController(meeting);
let meetingFormView = new MeetingFormView(meetingFormController);
let meetingContainer = document.querySelector("#form-container");
meetingContainer.insertBefore(meetingFormView.element, meetingContainer.firstChild);

let buttonsController = new NewButtonController(meeting);
let buttonsView = new NewMeetingsButtonsView(buttonsController);

// load first form
let event = new Event();
let eventFormController = new EventFormController(event, meeting);
let eventFormView = new EventFormView(eventFormController);
let eventContainer = document.querySelector("#form-container-inner");
eventContainer.appendChild(eventFormView.element);