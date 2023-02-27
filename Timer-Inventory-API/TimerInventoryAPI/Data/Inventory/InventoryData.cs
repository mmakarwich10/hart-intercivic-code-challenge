using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Data.Inventory
{
    public class InventoryData : IInventoryData
    {
        public List<InventoryItemDto> GetAllInventory()
        {
            XmlSerializer reader = new XmlSerializer(typeof(InventoryTable));
            List<InventoryItemDto> items;

            using (StreamReader file = new StreamReader(@"..\Data\Storage\Inventory.xml"))
            {
                InventoryTable table = (InventoryTable)(reader.Deserialize(file) ?? new InventoryTable());
                items = table.Items;
            }

            return items;
        }
    }
}
