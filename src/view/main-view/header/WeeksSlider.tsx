import { useState, useEffect, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import Button from 'common/components/Button';
import PrevIcon from 'common/components/PrevIcon';
import NextIcon from 'common/components/NextIcon';
import { IStoreProps } from 'store/store.model';
import { Slide, SlideItemData, SlideShow, SlideShowSlider } from 'common/components/Styled';

export interface ISlideState {
  activeSlide?: number;
  translate?: number;
  transition?: number;
  slides?: number[];
}

const WeeksSlider = inject('Store')(
  observer((props: IStoreProps) => {
    const { Store } = props || {};
    const { weeksStore = [], changeWeek } = Store || {};

    const [index, setIndex] = useState<number>(0);
    const [silders, setSliders] = useState<number[]>([]);

    const handleBtn = useCallback(
      (next: boolean): void => {
        const nextIndex = index + 1 > silders.length - 1 ? 0 : index + 1;
        const prevIndex = index - 1 < 0 ? silders.length - 1 : index - 1;
        setIndex(next ? nextIndex : prevIndex);
      },
      [index, silders]
    );

    useEffect(() => {
      const activeWeek = weeksStore.findIndex(el => el?.weekStatus === 'active');
      setSliders(weeksStore?.map(item => item.weekIndex as number) ?? []);
      setIndex(activeWeek);
    }, [weeksStore]);

    useEffect(() => {
      changeWeek?.(index);
    }, [index]);

    return (
      <div className="week-wrap">
        <div className="week">
          <Button className="btn_nav" onClick={() => handleBtn(false)}>
            <PrevIcon />
          </Button>

          <SlideShow>
            <SlideShowSlider transform={`translate3d(${-index * 100}%, 0px, 0px)`}>
              {silders &&
                silders?.map((item, i) => (
                  <Slide key={i}>
                    <SlideItemData>Week {item}</SlideItemData>
                  </Slide>
                ))}
            </SlideShowSlider>
          </SlideShow>

          <Button className="btn_nav" onClick={() => handleBtn(true)}>
            <NextIcon />
          </Button>
        </div>
      </div>
    );
  })
);

export default WeeksSlider;
