import { useState } from 'react';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, CartItem, selectorcartItems } from '../../redux/slices/cart-slice';

type PizzaBlockProps = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  price: number;
  count: number;
  sizes: number[];
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, imageUrl, title, types, sizes, price }) => {
  const cartItems = useSelector(selectorcartItems(id));
  const dispatch = useDispatch();
  const [typesPizza, setTypesPizza] = useState(0);
  const [sizePizza, setSizePizza] = useState(0);
  const [addPizza, setAddPizza] = useState(0);
  const typesName = ['тонкое', 'традиционное'];

  const addedCount = cartItems ? cartItems.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typesName[typesPizza],
      size: sizes[sizePizza],
      count: 0,
    };
    setAddPizza((addPizza) => addPizza + 1);
    dispatch(addItem(item));
  };

  const onClickSize = (index: number) => {
    setSizePizza(index);
  };

  const onClickTypes = (index: number) => {
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
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
