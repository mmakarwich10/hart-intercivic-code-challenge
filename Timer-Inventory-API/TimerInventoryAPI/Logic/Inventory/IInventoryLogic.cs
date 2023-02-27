using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Inventory
{
    public interface IInventoryLogic
    {
        List<InventoryItemDto> GetAllInventory();
    }
}
