import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


import ('./style.css');

const renderProduct = (product) => {
  return (
    <li className="list__item" key={product.id}>
      <span>Product name: {product.name}</span><br/>
      <span>Price: {product.price}</span>
      <IconButton color="primary" aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </li>
  );
};

const ProductsList = ({ products, took, totalProducts, numberProducts, isLoading, page, prevPage, nextPage }) => {
  const currentPage = page + 1;
  return (
    <Fragment>
      <div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div className="products">
            <ul className="list">
              {products.map(product => renderProduct(product))}
            </ul>
            <span className="list__search-statistics"> Found: {totalProducts} results in {took}sec </span>
            <div className="list__pagination">
              page: {currentPage}
              {currentPage !== 1 && <Button className="pagination__button" variant="contained" size="small" color="primary" onClick={prevPage.bind(this)}>
                prev
              </Button>}
              {currentPage * numberProducts !== totalProducts && <Button className="pagination__button" variant="contained" size="small" color="primary" onClick={nextPage.bind(this)}>
                next
              </Button>}
            </div>
          </div>
        )}
      </div>
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