using Logic.Timer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace TimerInventoryAPIWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimerController : ControllerBase
    {
        private ITimerLogic _timerLogic;

        public TimerController(ITimerLogic timerLogic) 
        { 
            _timerLogic = timerLogic;
        }

        [HttpGet("initial-value")]
        public IActionResult GetInitialValue()
        {
            TimeHmsDto returnedTime = _timerLogic.GetInitialValue();
            return Ok(returnedTime);
        }

        [HttpPost("finished")]
        public IActionResult TimerHasFinished()
        {
            bool processSuccessful = _timerLogic.TimerHasFinished();
            return Ok(processSuccessful);
        }
    }
}
