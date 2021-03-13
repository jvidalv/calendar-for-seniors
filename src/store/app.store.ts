import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'app/domains/user/store/user.slice';
import { calendarSlice } from 'app/domains/calendar/store/calendar.slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
