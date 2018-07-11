import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';

import ('./style.css');

const Pagination = ({ page, onChangePage,changeRowsPerPage, productsPerPage, totalProducts}) => {
  return (
    <TablePagination
      component="div"
      count={totalProducts}
      rowsPerPage={productsPerPage}
      page={page}
      backIconButtonProps={{
        'aria-label': 'Previous Page',
      }}
      nextIconButtonProps={{
        'aria-label': 'Next Page',
      }}
      onChangePage={onChangePage}
      onChangeRowsPerPage={changeRowsPerPage}
    />
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  changeRowsPerPage: PropTypes.func,
  productsPerPage: PropTypes.number,
  totalProducts: PropTypes.number
};

export default Pagination;


