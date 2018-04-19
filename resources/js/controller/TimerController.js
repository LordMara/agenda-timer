import {Timer} from "../model/Timer.js";
import {MeetingView} from "../view/MeetingView.js";

export class TimerController {
    constructor(meeting) {
        this._meeting = meeting;
        this._view = new MeetingView(meeting);
        this._timer = null;
    }

    build() {
        this._view.createElement();
        this.createTimer();
    }

    createTimer() {
        let meetingTime = this._meeting.estimatedTime();
        let meetingClock = document.getElementById('meeting').getElementsByTagName('p')[1];
        let eventsTimes = [];
        let eventsClocks = [];

        for (let i = 0; i < this._meeting.events.length; i++) {
            eventsTimes.push(this._meeting.events[i].time);
            eventsClocks.push(document.getElementsByTagName('li')[i].getElementsByTagName('p')[1]);
        }

        this._timer = new Timer(meetingTime, meetingClock, eventsTimes, eventsClocks);
    }

    start() {
        let timer = this._timer;
        let stopper = setInterval(function() {
            timer.countdown();
            timer.setClocks();

            if (timer.hasEventEnded()) {
                timer.nextEvent();
            }

            if (timer.hasFinished()) {
                clearInterval(stopper);
            }
        }, 1000);
    }
}