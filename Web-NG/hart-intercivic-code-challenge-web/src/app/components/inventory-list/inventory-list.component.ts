import { Component, OnInit } from "@angular/core";
import { InventoryItem } from "src/app/models/inventory-item";
import { InventoryApiService } from "src/app/services/inventory-api.service";

@Component({
    selector: 'hicc-inventory-list',
    templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit {
    public inventoryItems: InventoryItem[] = [];

    constructor(private _inventoryApiService: InventoryApiService) {}

    public ngOnInit(): void {
        this._inventoryApiService.getAllInventory().subscribe(response => {
            if (response !== undefined && response !== null) {
                this.inventoryItems = response;
            }
        })
    }
}