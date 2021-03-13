import * as RNLocalize from 'react-native-localize';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/app.store';

export interface UserState {
  lang: string;
  timezone: string;
}

// Define the initial state using that type
const initialState: UserState = {
  lang: RNLocalize.getLocales()[0].languageCode,
  timezone: RNLocalize.getTimeZone(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
