import { Component } from "@angular/core";
import { InventoryItem } from "src/app/models/inventory-item";

@Component({
    selector: 'hicc-inventory-list',
    templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent {
    public inventoryItems: InventoryItem[] = [
        { description: "Table", count: 2 },
        { description: "Chair", count: 18 }
    ]
}