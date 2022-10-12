import { useState } from 'react';
import React from 'react';

function Categories(params) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickIndex = (index) => {
    setActiveIndex(index);
  };

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li onClick={() => onClickIndex(i)} className={activeIndex === i ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
