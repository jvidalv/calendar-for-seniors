import { addDays, startOfWeek } from 'date-fns';
import format from 'app/utils/date-fns/format';
import {
  firstDayOfTheMonthAsDate,
  lastDayOfTheMonth,
} from 'app/utils/date-fns/utils';
import {
  ICalendarDay,
  ICalendarMonth,
} from 'app/domains/calendar/calendar-monthly/calendar-monthly.types';

const NUMBER_OF_MONTHS = 112;
export const INDEX_CURRENT_MONTH = NUMBER_OF_MONTHS / 2;

export const DAY_UI_HEIGHT = 90;
export const MONTH_UI_HEIGHT = DAY_UI_HEIGHT * 6;

const firstDayWeek = startOfWeek(new Date());

export const getWeekDays = (formatStr: string = 'EEEEEE'): string[] => {
  return Array.from(Array(7)).map((e, i) =>
    format(addDays(firstDayWeek, i + 1), formatStr)
  );
};

const getDaysForMonth = (monthFromToday: number): ICalendarDay[] => {
  const firstDayAsDate = firstDayOfTheMonthAsDate(monthFromToday);
  const firstDayAsNumber = Number.parseInt(format(firstDayAsDate, 'i')) - 1;

  return Array.from(
    Array(
      Number.parseInt(lastDayOfTheMonth(monthFromToday, 'd')) + firstDayAsNumber
    )
  ).map((e, i) => {
    const date = addDays(firstDayAsDate, i - firstDayAsNumber).toString();
    const dayNumber = Number.parseInt(
      format(addDays(firstDayAsDate, i - firstDayAsNumber), 'd')
    );

    return {
      display: i >= 10 || dayNumber <= 10,
      date,
      dayNumber,
    };
  });
};

export const getMonthsForFlatList = (): ICalendarMonth[] => {
  return [...Array(NUMBER_OF_MONTHS)].map((_, i) => {
    const position = i - INDEX_CURRENT_MONTH;

    return {
      index: i,
      position,
      date: firstDayOfTheMonthAsDate(position).toString(),
      days: getDaysForMonth(position),
    };
  });
};
