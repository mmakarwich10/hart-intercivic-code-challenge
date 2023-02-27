using Logic.Inventory;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace TimerInventoryAPIWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private IInventoryLogic _inventoryLogic;

        public InventoryController(IInventoryLogic inventoryLogic)
        {
            _inventoryLogic = inventoryLogic;
        }

        [HttpGet("")]
        public IActionResult GetAllInventory()
        {
            List<InventoryItemDto> resultList = _inventoryLogic.GetAllInventory();
            return Ok(resultList);
        }
    }
}
