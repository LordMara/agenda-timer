"use strict";

import {Event} from "./model/Event.js";
import {Meeting} from "./model/Meeting.js";
import {TimerController} from "./controller/TimerController.js";


function getTestMeeting() {
    let meeting = new Meeting(1, 'creating meeting host', []);
    meeting.addEvent(new Event('adding a host class to perform meeting in real time', 30000));
    meeting.addEvent(new Event('research about time in js and display', 60000));
    meeting.addEvent(new Event('in-real-time implementation', 30000));

    return meeting;
}

function startMeeting(meeting) {
    let ctrl = new TimerController(meeting);
    ctrl.build();
    ctrl.start();
}

startMeeting(getTestMeeting());
