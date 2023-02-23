import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TimeHMS } from "../models/time-hms";

@Injectable({
    providedIn: 'root'
})
export class TimerApiService extends HttpClient {
    private _timerInventoryApiPath: string = "";
    
    public getTimerInitialValue(): Observable<TimeHMS> {
        return of({ hours: 0, minutes: 2, seconds: 0 });
        //return this.get<TimeHMS>(`${this._timerInventoryApiPath}timer/initial-value`);
    }
}