import React from 'react';
import styles from './pagination.module.scss';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  pageSelect: any;
};
const Pagination: React.FC<PaginationProps> = ({ pageSelect }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => pageSelect(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
