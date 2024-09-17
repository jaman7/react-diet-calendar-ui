import { inject, observer } from 'mobx-react';
import { FaCaretDown } from 'react-icons/fa';
import { IStoreProps, StoreName } from 'store/store.model';

const { STORE } = StoreName;

const TimeCol = inject(STORE)(
  observer((props: IStoreProps) => {
    const { Store } = props || {};
    const { dateTime } = Store || {};

    const Workout = 'Workout';

    const renderTime = (time: string, index: number): JSX.Element => {
      return (
        <div key={index} className="time__item">
          <p>{time}</p>
        </div>
      );
    };

    return (
      <>
        <div className="time__item" />

        {dateTime && dateTime.map((time: string, i: number) => renderTime(time, i))}
        <div className="time__item" />

        <div className="time__item">
          <a href="#">
            <span>{Workout}</span>
            <FaCaretDown />
          </a>
        </div>
      </>
    );
  })
);

export default TimeCol;
