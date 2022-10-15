import { Link } from 'react-router-dom';
import Search from './search/search';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
          <Link to="/" class="">
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </Link>
        </div>
        <Search />
        <div className="header__cart">
          <Link to="/cart" class="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
