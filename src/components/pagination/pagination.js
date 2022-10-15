import React from 'react';
import styles from './pagination.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageSelect }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => pageSelect(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
