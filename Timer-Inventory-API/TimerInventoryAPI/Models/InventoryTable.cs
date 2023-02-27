using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Models
{
    [XmlRoot]
    public class InventoryTable
    {
        [XmlElement("InventoryItem")]
        public List<InventoryItemDto> Items { get; set; } = new List<InventoryItemDto>();
    }
}
