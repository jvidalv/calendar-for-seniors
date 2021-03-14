import { createSlice } from '@reduxjs/toolkit';
import {
  monthInitialState,
  sam,
  CalendarMonthActions,
} from 'app/domains/calendar/store/calendar.month.actions';

export interface CalendarState {
  month: CalendarMonthActions;
}

const initialState: CalendarState = {
  month: { ...monthInitialState },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setActiveMonths: sam,
  },
});

calendarSlice.caseReducers;

export const { setActiveMonths } = calendarSlice.actions;

export default calendarSlice.reducer;
