import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modalReducer from './products';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
