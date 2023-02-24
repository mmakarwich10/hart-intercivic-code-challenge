using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Timer
{
    public interface ITimerData
    {
        TimeHmsDto GetInitialValue();
    }
}
