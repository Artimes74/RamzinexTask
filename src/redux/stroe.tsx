import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {usersReducer} from './reducer';

const reducers = combineReducers({
  userReducer: usersReducer.reducer,
});

const store = configureStore({
  reducer: {
    reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
