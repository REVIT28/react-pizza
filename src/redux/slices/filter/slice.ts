import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortType } from './type';

const initialState: FilterSliceState = {
  searchValue: '',
  currentPage: 1,
  categoryId: 0,
  sortType: {
    name: 'популярности',
    sort: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export default filterSlice.reducer;
