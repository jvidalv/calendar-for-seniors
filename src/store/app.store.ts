import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'app/store/user/user.slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
