import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TimeHMS } from "../models/time-hms";
import { BaseTimerInventoryApiService } from "./base-timer-inventory-api.service";

@Injectable({
    providedIn: 'root'
})
export class TimerApiService extends BaseTimerInventoryApiService {
    private _timerApiPath: string = `${this._timerInventoryApiPath}timer/`;
    
    public getTimerInitialValue(): Observable<TimeHMS> {
        return of({ hours: 0, minutes: 2, seconds: 0 });
        //return this.get<TimeHMS>(`${this._timerApiPath}initial-value`);
    }
}