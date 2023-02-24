import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BaseTimerInventoryApiService extends HttpClient {
    protected _timerInventoryApiPath: string = "https://localhost:7030/api/";
}