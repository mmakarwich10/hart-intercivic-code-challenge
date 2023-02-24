import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TimeHMS } from "../models/time-hms";
import { BaseTimerInventoryApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root'
})
export class TimerApiService extends BaseTimerInventoryApiService {
    private _timerApiBaseUrl: string = `${this._timerInventoryApiPath}timer/`;
    
    public getTimerInitialValue(): Observable<TimeHMS> {
        return this.get<TimeHMS>(`${this._timerApiBaseUrl}initial-value`);
    }

    public sendTimerIsFinished(): Observable<boolean> {
        return this.post<boolean>(`${this._timerApiBaseUrl}finished`, null);
    }
}