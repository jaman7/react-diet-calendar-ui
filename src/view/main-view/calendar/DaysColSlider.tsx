import { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import DaysItems from './DaysItems';
import { IDaysStore, IStoreProps, IWeeksWork, StoreName } from 'store/store.model';
import { DataSlide, SlideItemDiv, SlideShow, SlideShowSlider } from 'common/components/Styled';

const { STORE } = StoreName;

const DaysColSlider = inject(STORE)(
  observer((props: IStoreProps) => {
    const { Store } = props || {};
    const { weeksStore = [], currentWeekChange = null } = Store || {};

    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
      setIndex(currentWeekChange as number);
    }, [currentWeekChange]);

    const renderWeekItem = (item: IWeeksWork): JSX.Element | JSX.Element[] | undefined => {
      return (
        <div className="data-wrap w-100">
          {item?.daysStore?.map((item: IDaysStore, i: number) => <DaysItems key={`${i}_${item.dayIndex}`} item={item} />)}
        </div>
      );
    };

    return (
      <SlideShow className="col-11 max-col-11 display-days border-rad--right">
        <SlideShowSlider transform={`translate3d(${-index * 100}%, 0px, 0px)`}>
          {weeksStore?.map((item, i) => (
            <DataSlide key={i}>
              <SlideItemDiv>{renderWeekItem(item)}</SlideItemDiv>
            </DataSlide>
          ))}
        </SlideShowSlider>
      </SlideShow>
    );
  })
);

export default DaysColSlider;
