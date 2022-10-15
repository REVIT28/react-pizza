import { useState } from 'react';
import React from 'react';

function Sort({ value, onClickSort }) {
  const [sortOn, setSortOn] = useState(false);

  const openSort = [
    { name: 'популярности (А-Я)', sort: 'rating' },
    { name: 'популярности (Я-А)', sort: '-rating' },
    { name: 'цене (А-Я)', sort: 'price' },
    { name: 'цене (Я-А)', sort: '-price' },
    { name: 'алфавиту (А-Я)', sort: 'title' },
    { name: 'алфавиту (Я-А)', sort: '-title' },
  ];

  const onSortList = () => {
    setSortOn(!sortOn);
  };

  const onClickActive = (index) => {
    onClickSort(index);
    setSortOn(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <b>Сортировка по:</b>
        <span onClick={() => onSortList()}>{value.name}</span>
      </div>
      {sortOn && (
        <div className="sort__popup">
          <ul>
            {openSort.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickActive(obj)}
                className={value.sort === obj.sort && 'active'}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
