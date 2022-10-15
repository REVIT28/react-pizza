import React from 'react';
import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from '../components/pagination/pagination';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {
  //Поиск
  const { searchValue } = useContext(AppContext);

  //Категории, сортировка
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  //Скелетон загрузки, и пиццы
  const [pizzaItem, setPizzaItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  async function getResource() {
    setIsLoading(true);

    const order = sortType.sort.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.sort.replace('-', '');
    const category = categoryId > 0 && `category=${categoryId}`;
    const search = searchValue && `&search=${searchValue}`;

    const itemsResponse = await axios.get(
      `https://6346771c745bd0dbd37e29ed.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    setPizzaItem(itemsResponse.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getResource();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">
        {searchValue ? `Результаты по запросу: ${searchValue}` : 'Все пиццы'}
      </h2>
      <div className="content__items">
        {isLoading
          ? [...Array(4)].map((_, i) => <Skeleton key={i} />)
          : pizzaItem
              .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>
      <Pagination pageSelect={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
