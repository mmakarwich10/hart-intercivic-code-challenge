using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class InventoryItemDto
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public int Count { get; set; }
    }
}
