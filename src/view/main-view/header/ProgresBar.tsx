import { inject, observer } from 'mobx-react';
import { IStoreProps, StoreName } from 'store/store.model';

const { STORE } = StoreName;

interface IStatus {
  weekIndex?: number;
  status?: string;
}

const ProgresBar = inject(STORE)(
  observer((props: IStoreProps) => {
    const { Store } = props || {};
    const { weeksStore = [] } = Store || {};

    const status: IStatus[] =
      weeksStore?.map(item => ({
        weekIndex: item.weekIndex,
        status: item.weekStatus,
      })) ?? [];

    const dotItem = (el: IStatus, i: number): JSX.Element => {
      return (
        <li key={i} className={`progress-step ${el.status ?? ''}`}>
          <span className="dot" />
          <span className="label">{el.weekIndex}</span>
        </li>
      );
    };

    return (
      <div className="progress-wrap">
        <p className="progress-txt">your 12 week progress</p>
        <ul className="progress-indicator">{status?.map((item, i) => dotItem(item, i))}</ul>
      </div>
    );
  })
);

export default ProgresBar;
