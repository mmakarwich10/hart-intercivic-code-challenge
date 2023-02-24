using Data.Timer;
using Models;

namespace Logic.Timer
{
    public class TimerLogic : ITimerLogic
    {
        private ITimerData _timerData;

        public TimerLogic(ITimerData timerData) 
        { 
            _timerData = timerData;
        }

        public TimeHmsDto GetInitialValue()
        {
            return _timerData.GetInitialValue();
        }

        public bool TimerHasFinished()
        {
            bool processSuccessful = true;
            return processSuccessful;
        }
    }
}