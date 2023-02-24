import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { InventoryItem } from "../models/inventory-item";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root'
})
export class InventoryApiService extends BaseApiService {
    private _inventoryApiUrl: string = `${this._apiBaseUrl}inventory/`;

    public getAllInventory(): Observable<InventoryItem[]> {
        return this.get<InventoryItem[]>(this._inventoryApiUrl);
    }
}