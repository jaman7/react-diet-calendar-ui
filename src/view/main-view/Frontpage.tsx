import { Component } from 'react';
import Calendar from 'view/main-view/calendar/Calendar';
import ProgresBar from 'view/main-view/header/ProgresBar';
import Proteins from 'view/main-view/header/Proteins';
import WeeksSlider from 'view/main-view/header/WeeksSlider';

class Frontpage extends Component {
  render() {
    return (
      <div className="container">
        <div className="container flex-between--start py-3">
          <ProgresBar />
          <WeeksSlider />
          <Proteins />
        </div>

        <Calendar />
      </div>
    );
  }
}

export default Frontpage;
