import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App';

import styles from './search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue, onChangeInput } = useContext(AppContext);

  return (
    <div className={styles.root}>
      <img src="/img/352091_search_icon.png" alt="" />
      <input
        value={searchValue}
        onChange={(e) => onChangeInput(e)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
