import { Component } from "@angular/core";

@Component({
    selector: 'hicc-timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent {
    public hours: number = 0;
    public minutes: number = 2;
    public seconds: number = 0;
}