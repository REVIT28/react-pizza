import { RootState } from '../../store';

export const selectorcartItems = (id: number) => (state: RootState) =>
  state.cart.items.find((obj: any) => obj.id === id);

export const selectorCart = (state: any) => state.cart;
