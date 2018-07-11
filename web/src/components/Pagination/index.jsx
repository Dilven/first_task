import React from 'react';
import PropTypes from 'prop-types';
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
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  changeRowsPerPage: PropTypes.func.isRequired,
  productsPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired
};

export default Pagination;


