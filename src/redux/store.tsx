import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './authReduccer'

const store = configureStore({
  reducer: rootReducer,
});

export default store;