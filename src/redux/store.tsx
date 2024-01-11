import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReduccer'

const store = configureStore({
  reducer: authReducer,
});

export default store;