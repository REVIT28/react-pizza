import React from 'react';
import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';

import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  const [pizzaItem, setPizzaItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getResource() {
    setIsLoading(true);

    const order = sortType.sort.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.sort.replace('-', '');
    const category = categoryId > 0 && `category=${categoryId}`;

    const itemsResponse = await axios.get(
      `https://6346771c745bd0dbd37e29ed.mockapi.io/item?${category}&sortBy=${sortBy}&order=${order}`,
    );
    setPizzaItem(itemsResponse.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getResource();
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(10)].map((_, i) => <Skeleton key={i} />)
          : pizzaItem.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>
    </>
  );
};

export default Home;
