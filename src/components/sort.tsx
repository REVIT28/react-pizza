import { useState, useRef, useEffect } from 'react';
import React from 'react';

type openSortItem = {
  name: string;
  sort: string;
};

const openSort: openSortItem[] = [
  { name: 'популярности (А-Я)', sort: 'rating' },
  { name: 'популярности (Я-А)', sort: '-rating' },
  { name: 'цене (А-Я)', sort: 'price' },
  { name: 'цене (Я-А)', sort: '-price' },
  { name: 'алфавиту (А-Я)', sort: 'title' },
  { name: 'алфавиту (Я-А)', sort: '-title' },
];

type SortProps = {
  value: {
    name: string;
    sort: string;
  };
  onChangeSort: any;
};

const Sort: React.FC<SortProps> = ({ value, onChangeSort }) => {
  const sortRef = useRef<HTMLDivElement>(null);
  const [sortOn, setSortOn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.path.includes(sortRef.current)) {
        setSortOn(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const onSortList = () => {
    setSortOn(!sortOn);
  };

  const onClickActive = (obj: openSortItem) => {
    onChangeSort(obj);
    setSortOn(false);
  };

  return (
    <div ref={sortRef} className="sort">
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
};

export default Sort;
