import {EventView} from "./EventView.js";
import {Timer} from "../model/Timer.js";
import {TimerController} from "../controller/TimerController.js";

export class MeetingView {
    constructor(meeting) {
        this._meeting = meeting;
    }

    set meeting(meeting) {
        this._meeting = meeting;
    }

    renderLink() {
        return `<p>${this._meeting.name}</p><p>${Timer.renderTime(this._meeting.estimatedTime())}</p>`;
    }

    render() {
        return `<div id="meeting">
                    <p id="name">${this._meeting.name}</p><p id="time">${Timer.renderTime(this._meeting.estimatedTime())}</p>
                </div>
                <div id="events">
                    <ul>
                        ${this.renderEvents()}
                    </ul>
                </div>
                <button onclick="location.reload();">exit</button>`
    }

    renderEvents() {
        let list = '';
        for (let event of this._meeting.events) {
            list += new EventView(event).render();
        }
        return list;
    }

    createElement() {
        document.getElementById('container').innerHTML = this.render();
    }

    createLink(timerController, newButtonController) {
        let li = document.createElement('li');
        let button = document.createElement('button');
        let buttonRemove = document.createElement('button');
        buttonRemove.className = "removeButton";
        li.className = "listToRemove";
        button.onclick = function() {
            document.body.innerHTML = `<div id="container"></div>`;
            timerController.build();
            timerController.start();
        };
        button.innerHTML = this.renderLink();
        li.appendChild(button);
        document.getElementById('meetings-list').getElementsByTagName('ul')[0].appendChild(li);
        buttonRemove.addEventListener("click", newButtonController.handleRemove.bind(newButtonController));
        buttonRemove.innerText = "x";
        li.appendChild(buttonRemove);
        document.getElementById('meetings-list').getElementsByTagName('ul')[0].appendChild(li);
    }
}