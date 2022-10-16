import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filter-slice';

export const store = configureStore({
  reducer: {
    filterSlice,
  },
});
