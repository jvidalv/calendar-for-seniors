import { createSlice } from '@reduxjs/toolkit';
import {
  monthlyInitialState,
  sam,
  CalendarMonthlyActions,
} from 'app/domains/calendar/store/calendar-monthly.actions';

export interface CalendarState {
  monthly: CalendarMonthlyActions;
}

const initialState: CalendarState = {
  monthly: { ...monthlyInitialState },
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
