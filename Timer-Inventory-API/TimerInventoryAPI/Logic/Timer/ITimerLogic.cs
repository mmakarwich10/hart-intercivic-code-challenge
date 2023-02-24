using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Timer
{
    public interface ITimerLogic
    {
        TimeHmsDto GetInitialValue();
        bool TimerHasFinished();
    }
}
