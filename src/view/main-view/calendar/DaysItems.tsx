import { inject, observer } from 'mobx-react';
import Button from 'common/components/Button';
import LazyImage from 'common/components/LazyImage';
import CheckedIcon from 'common/components/CheckedIcon';
import PrinterIcon from 'common/components/PrinterIcon';
import DumbbellIcon from 'common/components/DumbbellIcon';
import CheckIcon from 'common/components/CheckIcon';
import { IDaysStore, IStore, StoreName } from 'store/store.model';

const { STORE } = StoreName;

interface IProps {
  Store?: IStore;
  item?: IDaysStore;
}

const DaysItems = inject(STORE)(
  observer((props: IProps) => {
    const { item, Store } = props || {};
    const { setActiveDumbbell, setCheckeDayDiet } = Store || {};
    const { dayIndex, diet = [], carb, dumbbell, status } = item || {};
    const carbDeggre = carb ? 'high-carb' : 'low-carb';

    const handleClickDumbbell = (): void => {
      setActiveDumbbell?.(dayIndex as number, !dumbbell);
    };

    const handleClickDietCheck = (indexDiet: number, checked: boolean): void => {
      setCheckeDayDiet?.(dayIndex as number, indexDiet, checked);
    };

    const renderDayIndex = (dayIndex: number): JSX.Element => {
      return (
        <div className="data__item">
          <span className="data__item--day">day {dayIndex}</span>
        </div>
      );
    };

    const renderDayItem = (): JSX.Element | JSX.Element[] | undefined => {
      return (
        diet?.map((dayItem, i) => (
          <div className="data__item data__item--diet" key={i + 1} onClick={() => handleClickDietCheck(i, !dayItem.checked)}>
            <span className="data__item--txt">{dayItem.name}</span>
            {dayItem.img !== '' ? <LazyImage className="img-fluid" src={`img/${dayItem.img}`} alt={`image-${dayItem.name}`} /> : <></>}
            {dayItem.checked ? <CheckedIcon /> : <></>}
          </div>
        )) ?? <></>
      );
    };

    const renderDayFooterOrFree = (): JSX.Element | JSX.Element[] | undefined => {
      return diet?.length ? (
        <>
          <div className="data__item data__item--carb">
            <p className="data__item--txt">{carbDeggre}</p>
          </div>

          <div className="data__item data__item--dumbbell">
            <button onClick={() => handleClickDumbbell()} className="data__item--dumbbellbtn checked">
              <DumbbellIcon className={dumbbell ? 'icon-dumbbell__ok' : 'icon-dumbbell'} />
              {dumbbell ? <CheckIcon /> : ''}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="data__item data__item--grow">
            <div className="data__item--labelwrapper">
              <span className="data__item--free">GUILT-FREE DAY</span>
              <LazyImage src="img/smile.svg" alt="smile" className="img-fluid lazyload img-smile" />
            </div>
          </div>
          <div className="data__item data__item--print">
            <Button type="button" className="btn btn_print">
              <PrinterIcon />
              <span>Print</span>
            </Button>
          </div>
        </>
      );
    };

    return (
      <div className={`data${status === 'active' ? ' active' : ''}`}>
        {renderDayIndex(dayIndex as number)}
        {renderDayItem()}
        {renderDayFooterOrFree()}
      </div>
    );
  })
);

export default DaysItems;
