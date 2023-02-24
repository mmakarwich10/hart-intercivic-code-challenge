import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotificationApiService extends HttpClient {
    private _notificationApiPath = "";

    public sendTimerIsFinished(): Observable<boolean> {
        return of(true);
        //return this.get<boolean>(`${this._notificationApiPath}timer-finished`);
    }
}