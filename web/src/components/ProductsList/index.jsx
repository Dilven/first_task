import React, { Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import Product from '../Product';
import Pagination from '../Pagination';

import ('./style.css');

const ProductsList = ({ products, took, totalProducts, productsPerPage, isLoading, page, handleChangePage, handleChangeRowsPerPage }) => {
  return (
    <Fragment>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div className="products">
            <ul className="list">
              {products.map(product => <Product product={product} key={product.id}/>)}
            </ul>
            <span className="list__search-statistics"> Found: {totalProducts} results{took ? <span> in {took}sec </span> : '' } </span>
            <Pagination 
              page={page}
              onChangePage={handleChangePage}
              changeRowsPerPage={handleChangeRowsPerPage}
              productsPerPage={productsPerPage}
              totalProducts={totalProducts}
            />
          </div>
        )}
    </Fragment>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  took: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  productsPerPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired
}

export default ProductsList;