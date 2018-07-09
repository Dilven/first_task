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
      <span>Nazwa produktu: {product.name}</span><br/>
      <span>Cena: {product.price}</span>
      <IconButton color="primary" aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </li>
  );
};

const ProductsList = ({ products, took, numberProducts, isLoading, prevPage, nextPage }) => {
    return (
      <Fragment>
        {isLoading ? (
						<CircularProgress />
					) : (
            <div className="products">
              <ul className="list">
                {products.map(product => renderProduct(product))}
              </ul>
              <span className="list__search-statistics"> Znaleziono: {numberProducts} produkty w {took}sec </span>
              <div className="list__pagination">
                <Button className="pagination__button" variant="contained" size="small" color="primary" onClick={prevPage.bind(this)}>
                  prev
                </Button>
                <Button className="pagination__button" variant="contained" size="small" color="primary" onClick={nextPage.bind(this)}>
                  next
                </Button>
              </div>
            </div>
        )}
      </Fragment>
    );
};

ProductsList.propTypes = {
  products: PropTypes.array,
  took: PropTypes.number,
  numberProducts: PropTypes.number,
  isLoading: PropTypes.bool,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func
}


export default ProductsList;