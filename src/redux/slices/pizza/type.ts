export type FetchPizza = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
};
export type Pizza = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  price: number;
  count: number;
  sizes: number[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status; // loading | success | error
}
