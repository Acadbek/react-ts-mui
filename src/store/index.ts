import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productReducer from './products'

const rootReducer = combineReducers({
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})
