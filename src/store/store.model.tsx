export interface IDiet {
  name?: string;
  img?: string;
  checked?: boolean;
}

export interface IDaysStore {
  dayIndex?: number;
  carb?: boolean;
  dumbbell?: boolean;
  status?: string;
  diet?: IDiet[];
}

export interface IWeeksWork {
  weekIndex?: number;
  weekStatus?: string;
  daysStore?: IDaysStore[];
}

export interface IHours {
  time?: string;
}

export interface IStore {
  isLoading?: boolean;
  currentWeekChange?: number;
  weeksStore?: IWeeksWork[];
  dateTime?: string[];
  changeWeek?: (week: number) => void;
  setWeekStatus?: (weekI: number) => void;
  setStatusActiveProgress?: (set: number, i: number) => string;
  setActiveDumbbell?: (i: number, set: boolean) => void;
  setCheckeDayDiet?: (i: number, indexDiet: number, set: boolean) => void;
}

export interface IStoreProps {
  Store?: IStore;
}

export enum StoreName {
  STORE = 'Store',
}
