import TimeCol from './TimeCol';
import DaysColSlider from './DaysColSlider';

const Calendar = () => {
  return (
    <div className="container d-flex">
      <div className="col-1 time">
        <TimeCol />
      </div>

      <DaysColSlider />
    </div>
  );
};

export default Calendar;
