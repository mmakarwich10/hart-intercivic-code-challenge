using Data.Inventory;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Inventory
{
    public class InventoryLogic : IInventoryLogic
    {
        private IInventoryData _inventoryData;

        public InventoryLogic(IInventoryData inventoryData)
        {
            _inventoryData = inventoryData;
        }

        public List<InventoryItemDto> GetAllInventory()
        {
            return _inventoryData.GetAllInventory();
        }
    }
}
