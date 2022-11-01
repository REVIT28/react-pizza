import { RootState } from '../../store';
import { pizzaSlice } from './slice';

export const pizzaSelector = (state: RootState) => state.pizza;
export const { setItems } = pizzaSlice.actions;
