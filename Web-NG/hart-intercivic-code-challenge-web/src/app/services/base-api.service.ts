import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BaseApiService extends HttpClient {
    protected _apiBaseUrl: string = "https://localhost:7030/api/";
}