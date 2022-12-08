import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/slice';

export const store = configureStore({reducer: rootReducer});
