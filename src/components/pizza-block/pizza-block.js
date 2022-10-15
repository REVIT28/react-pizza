import { useState } from 'react';
import React from 'react';

function PizzaBlock({ id, imageUrl, title, types, sizes, price, category, rating }) {
  const [typesPizza, setTypesPizza] = useState(0);
  const [sizePizza, setSizePizza] = useState(0);
  const [addPizza, setAddPizza] = useState(0);
  const typesName = ['тонкое', 'традиционное'];

  const onClickAdd = () => {
    setAddPizza((addPizza) => addPizza + 1);
  };

  const onClickSize = (index) => {
    setSizePizza(index);
  };

  const onClickTypes = (index) => {
    setTypesPizza(index);
  };

  return (
    <div className="pizza-block__wrapper">
      <div key={id} className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((i) => (
              <li
                key={i}
                onClick={() => onClickTypes(i)}
                className={typesPizza === i ? 'active' : ''}
              >
                {typesName[i]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((item, i) => (
              <li
                key={i}
                onClick={() => onClickSize(i)}
                className={sizePizza === i ? 'active' : ''}
              >
                {item} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price}₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <span>Добавить</span>
            <i>{addPizza}</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
