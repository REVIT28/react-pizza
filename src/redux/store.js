import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter-slice';
import cart from './slices/cartSlice';
import pizza from './slices/pizza-slice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
