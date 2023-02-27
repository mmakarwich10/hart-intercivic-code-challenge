using Models;
using System.Xml.Serialization;

namespace Data.Timer
{
    public class TimerData : ITimerData
    {
        public TimeHmsDto GetInitialValue()
        {
            XmlSerializer reader = new XmlSerializer(typeof(TimeHmsDto));
            TimeHmsDto value;

            using (StreamReader file = new StreamReader(@"..\Data\Storage\Timer.xml"))
            {
                value = (TimeHmsDto)(reader.Deserialize(file) ?? new TimeHmsDto());
            }

            return value;
        }
    }
}