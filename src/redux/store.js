import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter-slice';
import cart from './slices/cart-slice';
import pizza from './slices/pizza-slice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
