export type SortType = {
  name: string;
  sort: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price';
};

export interface FilterSliceState {
  searchValue: string;
  currentPage: number;
  categoryId: number;
  sortType: SortType;
}
