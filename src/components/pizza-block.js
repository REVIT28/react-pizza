import { useState } from 'react';
import React from 'react';

function PizzaBlock(params) {
  const [addPizza, setAddPizza] = useState(0);

  const onClickAdd = () => {
    setAddPizza((addPizza) => addPizza + 1);
  };
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">Чизбургер-пицца</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от 395 ₽</div>
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
  );
}

export default PizzaBlock;
