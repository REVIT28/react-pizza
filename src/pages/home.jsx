import React from 'react';

import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from '../components/pagination/pagination';

import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSortType } from '../redux/slices/filter-slice';
import { fetchPizzas } from '../redux/slices/pizza-slice';

const Home = () => {
  const { categoryId, sortType } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);

  const dispatch = useDispatch();

  //Поиск
  const { searchValue } = useContext(AppContext);

  //Скелетон загрузки, и пиццы

  const [currentPage, setCurrentPage] = useState(1);

  async function getResource() {
    const order = sortType.sort.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.sort.replace('-', '');
    const category = categoryId > 0 && `category=${categoryId}`;
    const search = searchValue && `&search=${searchValue}`;

    dispatch(fetchPizzas({ order, sortBy, category, search, currentPage }));
  }

  useEffect(() => {
    getResource();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSort = (id) => {
    dispatch(setSortType(id));
  };

  const skeleton = [...Array(4)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <PizzaBlock {...obj} key={obj.id} />);

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
            Произошла ошибка <icon>😕</icon>
          </h2>
          <p>К сожалению, не получилось выполнить запрос. Повторите попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeleton : pizzas}</div>
      )}

      <Pagination pageSelect={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
