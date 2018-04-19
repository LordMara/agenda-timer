"use strict";

import {Event} from "./model/Event.js";
import {Meeting} from "./model/Meeting.js";

import {NewButtonController} from "./addmeeting/NewMeetingButtonsController.js"
import {NewMeetingsButtonsView} from "./addmeeting/NewMeetingsButtonsView.js";

import {EventFormView} from "./view/EventFormView.js";
import {EventFormController} from "./controller/EventFormController.js";

import {MeetingFormView} from "./addmeeting/meetingform/MeetingFormView.js";
import {MeetingFormController} from "./addmeeting/meetingform/MeetingFormController.js";

import {TimerController} from "./controller/TimerController.js";

import {storage} from "./storage/Storage.js";
import {MeetingView} from "./view/MeetingView.js";


// storage object in creation before import load all objects
// load existing meetings from local storage and list them at site
let meetingView = new MeetingView();
for (let meeting of storage.meetings) {
    meetingView.meeting = meeting;
    meetingView.createLink(new TimerController(meeting));
}

// get id base on local storage here
let meeting = new Meeting(null, "Edit me!", new Array());


// create form for meeting name
let meetingFormController = new MeetingFormController(meeting);
let meetingFormView = new MeetingFormView(meetingFormController);
let meetingContainer = document.querySelector("#form-container");


if (meetingContainer.firstChild === null) {
    meetingContainer.appendChild(meetingFormView.element);
} else {
    meetingContainer.insertBefore(meetingFormView.element, meetingContainer.firstChild);
}


let buttonsController = new NewButtonController(meeting);
let buttonsView = new NewMeetingsButtonsView(buttonsController);

// load first form
let event = new Event("Edit me!", 0);
let eventFormController = new EventFormController(event, meeting);
let eventFormView = new EventFormView(eventFormController);
let eventContainer = document.querySelector("#form-container-inner");
eventContainer.appendChild(eventFormView.element);
