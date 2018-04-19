import {Timer} from "../model/Timer.js";

export class TimerController {
    constructor(meeting) {
        this._timer = TimerController.createTimer(meeting);
    }

    start() {
        let timer = this._timer;
        let stopper = setInterval(function () {
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

    static createTimer(meeting) {
        let eventsTimes = [];
        let eventsClocks = [];

        for (let i = 0; i < meeting.events.length; i++) {
            eventsTimes.push(meeting.events[i].time);
            eventsClocks.push(document.getElementsByTagName('li')[i].getElementsByTagName('p')[1]);
        }

        let meetingTime = meeting.estimatedTime();
        let meetingClock = document.getElementById('meeting').getElementsByTagName('p')[1];

        return new Timer(meetingTime, meetingClock, eventsTimes, eventsClocks);
    }
}