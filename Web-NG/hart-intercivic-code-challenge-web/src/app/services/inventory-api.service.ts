import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { InventoryItem } from "../models/inventory-item";
import { BaseTimerInventoryApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root'
})
export class InventoryApiService extends BaseTimerInventoryApiService {
    private _inventoryApiPath: string = `${this._timerInventoryApiPath}inventory/`;

    public getAllInventory(): Observable<InventoryItem[]> {
        return of([
            { description: "Table", count: 2 },
            { description: "Chair", count: 18 }
        ]);
        //return this.get<InventoryItem[]>(this._inventoryApiPath);
    }
}