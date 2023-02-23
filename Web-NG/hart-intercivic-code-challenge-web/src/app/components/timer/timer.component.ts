import { Component } from "@angular/core";
import { Subscription, timer } from "rxjs";

@Component({
    selector: 'hicc-timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent {
    public hours: number = 1;
    public minutes: number = 0;
    public seconds: number = 1;

    private _timerSub: Subscription = new Subscription();

    public startTimer() {
        const oTimer = timer(0, 1000);
        this._timerSub = oTimer.subscribe(x => {
            if (this.seconds === 0 && this.minutes === 0 && this.hours === 0) {
                this._timerSub.unsubscribe();
            } else {
                this._tickSecondDown();
            }
        });
    }

    private _tickSecondDown() {
        if (this.seconds === 0) {
            this._tickMinuteDown();
            this.seconds = 59;
        } else {
            this.seconds--;
        }
    }

    private _tickMinuteDown() {
        if (this.minutes === 0) {
            this._tickHoursDown();
            this.minutes = 59;
        } else {
            this.minutes--;
        }
    }

    private _tickHoursDown() {
        if (this.hours > 0) {
            this.hours--;
        }
    }
}