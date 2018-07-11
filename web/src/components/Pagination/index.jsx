import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import ('./style.css');

const Pagination = ({ currentPage, prevPage, nextPage, numberProducts, totalProducts}) => {
  return (
    <div className="pagination">
      page: {currentPage}
      {currentPage !== 1 && <Button className="pagination__button" variant="contained" size="small" color="primary" onClick={prevPage.bind(this)}>
        prev
      </Button>}
      {currentPage * numberProducts !== totalProducts && <Button className="pagination__button" variant="contained" size="small" color="primary" onClick={nextPage.bind(this)}>
        next
      </Button>}
    </div>
  )
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func,
  numberProducts: PropTypes.number,
  totalProducts: PropTypes.number
};

export default Pagination;


