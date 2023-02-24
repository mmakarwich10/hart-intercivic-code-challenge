﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace TimerInventoryAPIWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimerController : ControllerBase
    {
        [HttpGet("initial-value")]
        public IActionResult GetInitialValue()
        {
            TimeHMSDto returnedTime = new TimeHMSDto
            {
                Hours = 0,
                Minutes = 2,
                Seconds = 0
            };
            return Ok(returnedTime);
        }
    }
}
