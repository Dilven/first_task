import React, { Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import Product from '../Product';
import Pagination from '../Pagination';

import ('./style.css');

const ProductsList = ({ products, took, totalProducts, numberProducts, isLoading, page, prevPage, nextPage }) => {
  const currentPage = page + 1;
  return (
    <Fragment>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div className="products">
            <ul className="list">
              {products.map(product => <Product product={product} key={product.id}/>)}
            </ul>
            <span className="list__search-statistics"> Found: {totalProducts} results in {took}sec </span>
            <Pagination 
              currentPage={currentPage}
              prevPage={prevPage}
              nextPage={nextPage}
              numberProducts={numberProducts}
              totalProducts={totalProducts}
            />
          </div>
        )}
    </Fragment>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
  took: PropTypes.number,
  totalProducts: PropTypes.number,
  isLoading: PropTypes.bool,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func
}

export default ProductsList;