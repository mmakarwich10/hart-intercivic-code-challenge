import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TimeHMS } from "../models/time-hms";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root'
})
export class TimerApiService extends BaseApiService {
    private _timerApiBaseUrl: string = `${this._apiBaseUrl}timer/`;
    
    public getTimerInitialValue(): Observable<TimeHMS> {
        return this.get<TimeHMS>(`${this._timerApiBaseUrl}initial-value`);
    }

    public sendTimerIsFinished(): Observable<boolean> {
        return this.post<boolean>(`${this._timerApiBaseUrl}finished`, null);
    }
}