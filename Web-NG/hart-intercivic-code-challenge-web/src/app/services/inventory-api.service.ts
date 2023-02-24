import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { InventoryItem } from "../models/inventory-item";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root'
})
export class InventoryApiService extends BaseApiService {
    private _inventoryApiPath: string = `${this._apiBaseUrl}inventory/`;

    public getAllInventory(): Observable<InventoryItem[]> {
        return of([
            { description: "Table", count: 2 },
            { description: "Chair", count: 18 }
        ]);
        //return this.get<InventoryItem[]>(this._inventoryApiPath);
    }
}