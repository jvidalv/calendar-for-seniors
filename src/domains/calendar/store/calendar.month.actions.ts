import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { CalendarState } from 'app/domains/calendar/store/calendar.slice';
import format from 'app/utils/date-fns/format';
import { ICalendarMonth } from 'app/domains/calendar/month/month.types';
import { INDEX_CURRENT_MONTH } from 'app/domains/calendar/month/month.model';
import { firstDayOfTheMonthAsDate } from 'app/utils/date-fns/utils';

interface ICurrentMonth extends Partial<ICalendarMonth> {
  month: string;
  year: string;
}

export interface CalendarMonthActions {
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

export const monthInitialState: CalendarMonthActions = {
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
  month: {
    currentMonth: action.payload.currentMonth,
    visibleMonths: action.payload.visibleMonths,
  },
});
