import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { CalendarState } from 'app/domains/calendar/store/calendar.slice';
import format from 'app/utils/date-fns/format';
import { ICalendarMonth } from 'app/domains/calendar/calendar-monthly/calendar-monthly.types';
import { INDEX_CURRENT_MONTH } from 'app/domains/calendar/calendar-monthly/calendar-monthly.model';
import { firstDayOfTheMonthAsDate } from 'app/utils/date-fns/utils';

interface ICurrentMonth extends Partial<ICalendarMonth> {
  month: string;
  year: string;
}

export interface CalendarMonthlyActions {
  currentMonth: ICurrentMonth;
  visibleMonths: Partial<ICalendarMonth>[];
}

const initialMonth: ICurrentMonth = {
  index: INDEX_CURRENT_MONTH,
  position: 0,
  date: firstDayOfTheMonthAsDate(0).toString(),
  month: format(Date.now(), 'MMMM'),
  year: format(Date.now(), 'y'),
};

export const monthlyInitialState: CalendarMonthlyActions = {
  currentMonth: initialMonth,
  visibleMonths: [initialMonth],
};

// Set Active Months
export const sam: CaseReducer<
  CalendarState,
  PayloadAction<{
    currentMonth: ICurrentMonth;
    visibleMonths: Partial<ICalendarMonth>[];
  }>
> = (s, action) => ({
  ...s,
  monthly: {
    currentMonth: action.payload.currentMonth,
    visibleMonths: action.payload.visibleMonths,
  },
});
