import { RootState } from '../../store';
import { filterSlice } from './slice';

export const selectorSort = (state: RootState) => state.filter;

export const { setCategoryId, setSortType, setSearchValue, setCurrentPage } = filterSlice.actions;
