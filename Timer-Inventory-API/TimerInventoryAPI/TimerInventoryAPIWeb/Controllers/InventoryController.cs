using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace TimerInventoryAPIWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        [HttpGet("")]
        public IActionResult GetAllInventory()
        {
            List<InventoryItemDto> resultList = new List<InventoryItemDto>
            {
                new InventoryItemDto { Id = 1, Description = "Table", Count = 2 },
                new InventoryItemDto { Id = 2, Description = "Chair", Count = 18 }
            };
            return Ok(resultList);
        }
    }
}
