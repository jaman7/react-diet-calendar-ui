import { observable, configure, makeObservable, action, runInAction } from 'mobx';
import { IStore, IWeeksWork } from './store.model';
import { HOURS } from './store.constance';
import WEEKSTORE from './weekstore';

configure({
  enforceActions: 'never',
});

class Store implements IStore {
  isLoading = false;
  dateTime: string[] = HOURS;
  weeksStore: IWeeksWork[] = WEEKSTORE;
  currentWeekChange: number = 0;
  progressBar: any[] = [];

  changeWeek = (week: number): void => {
    runInAction(() => {
      this.currentWeekChange = week;
    });
  };

  setStatusActiveProgress = (set: number, i: number): string => {
    if (i < set) return 'complete';
    if (set === i || (i === 0 && set === 0)) return 'active';
    return '';
  };

  setWeekStatus = (weekI: number): void => {
    const todoRequests: any[] =
      this.weeksStore.map((_, i) => ({
        id: i + 1,
        action: this.setStatusActiveProgress(weekI, i),
      })) ?? [];

    runInAction(() => {
      this.progressBar = todoRequests;
    });
  };

  setActiveDumbbell = (i: number, set: boolean): void => {
    const weekIndex = this.currentWeekChange;
    const indexDay = this.weeksStore?.[weekIndex]?.daysStore?.findIndex(item => item.dayIndex === i) ?? -1;

    runInAction(() => {
      if (this.weeksStore.length) this.weeksStore[weekIndex].daysStore[indexDay].dumbbell = set;
    });
  };

  setCheckeDayDiet = (i: number, indexDiet: number, set: boolean): void => {
    const weekIndex = this.currentWeekChange;
    const indexDay = this.weeksStore?.[weekIndex]?.daysStore?.findIndex(item => item.dayIndex === i) ?? -1;
    runInAction(() => {
      if (this.weeksStore.length) this.weeksStore[weekIndex].daysStore[indexDay].diet[indexDiet].checked = set;
    });
  };

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      dateTime: observable,
      progressBar: observable,
      weeksStore: observable,
      currentWeekChange: observable,
      changeWeek: action,
      setStatusActiveProgress: action,
      setWeekStatus: action,
      setActiveDumbbell: action,
      setCheckeDayDiet: action,
    });
  }
}

export default new Store();
