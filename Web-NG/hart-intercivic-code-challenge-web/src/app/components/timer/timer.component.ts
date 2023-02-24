import { Component, OnInit } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { NotificationApiService } from "src/app/services/notification-api.service";
import { TimerApiService } from "src/app/services/timer-api.service";

@Component({
    selector: 'hicc-timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {
    public hours: number = 0;
    public minutes: number = 0;
    public seconds: number = 0;

    public successfulNotification: boolean = false;
    public timerIsRunning: boolean = false;

    private _timerSub: Subscription = new Subscription();

    constructor(
        private _timerApiService: TimerApiService,
        private _notificationApiService: NotificationApiService
    ) {}

    public startTimer() {
        this.successfulNotification = false;

        const oTimer = timer(0, 1000);
        this.timerIsRunning = true;
        this._timerSub = oTimer.subscribe(x => {
            if (this.seconds === 0 && this.minutes === 0 && this.hours === 0) {
                this.pauseTimer();
                this._notificationApiService.sendTimerIsFinished().subscribe(response => {
                    if (response != undefined && response != null) {
                        this.successfulNotification = response;
                    }
                });
            } else {
                this._tickSecondDown();
            }
        });
    }

    public pauseTimer() {
        this._timerSub.unsubscribe();
        this.timerIsRunning = false;
    }

    public ngOnInit(): void {
        this._timerApiService.getTimerInitialValue().subscribe(response => {
            if (response !== undefined && response !== null) {
                //TODO: Have nullish checking on hours/minutes/seconds, instead of coalescing.
                this.hours = (response.hours ?? 0) < 0 ? 0 : response.hours;
                this.minutes = (response.minutes ?? 0) < 0 ? 0 : response.minutes;
                this.seconds = (response.seconds ?? 0) < 0 ? 0 : response.seconds;
            }
        })
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