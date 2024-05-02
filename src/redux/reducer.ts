import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './stroe';

interface CounterState {
  theme: 'dark' | 'light';
  language: 'fa' | 'en';
}

const initialState: CounterState = {
  theme: 'dark',
  language: 'en',
};

export const usersReducer = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setApplicationTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
    setApplicationLanguage: (state, action: PayloadAction<'fa' | 'en'>) => {
      state.language = action.payload;
    },
  },
});

export const {setApplicationTheme, setApplicationLanguage} =
  usersReducer.actions;

export const selectCount = (state: RootState) => state.reducers;

export default usersReducer.reducer;
