import React from 'react';

import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from '../components/pagination/pagination';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectorSort,
  setCategoryId,
  setSortType,
  setCurrentPage,
} from '../redux/slices/filter/selector';
import { pizzaSelector } from '../redux/slices/pizza/selector';
import { fetchPizzas } from '../redux/slices/pizza/action';

const Home: React.FC = () => {
  const { categoryId, sortType, searchValue, currentPage } = useSelector(selectorSort);

  const { items, status } = useSelector(pizzaSelector);

  const dispatch = useDispatch();

  //Поиск

  //Скелетон загрузки, и пиццы

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getResource() {
    const order = sortType.sort.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.sort.replace('-', '');
    const category = categoryId > 0 && `category=${categoryId}`;
    const search = searchValue && `&search=${searchValue}`;

    dispatch(
      //@ts-ignore
      fetchPizzas({ order, sortBy, category, search, currentPage }),
    );
  }

  useEffect(() => {
    getResource();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage, getResource]);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSort = (id: any) => {
    dispatch(setSortType(id));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const skeleton = [...Array(4)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items
    .filter((obj: any) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj: any) => <PizzaBlock {...obj} key={obj.id} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">
        {searchValue ? `Результаты по запросу: ${searchValue}` : 'Все пиццы'}
      </h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>К сожалению, не получилось выполнить запрос. Повторите попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeleton : pizzas}</div>
      )}

      <Pagination pageSelect={onChangePage} />
    </>
  );
};

export default Home;
