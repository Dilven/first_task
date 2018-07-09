import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CircularProgress from '@material-ui/core/CircularProgress';

import ('./style.css');

const renderProduct = (product) => {
  return (
    <li className="list__item" key={product.id}>
      <span>{product.name}</span> 
      <IconButton color="primary" aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </li>
  );
};

const ProductsList = ({ products, took, numberProducts, isLoading }) => {
    return (
      <Fragment>
        {isLoading ? (
						<CircularProgress />
					) : (
            <div className="container">
              <ul className="list">
                {products.map(product => renderProduct(product))}
              </ul>
              <span className="list__search-statistics"> Znaleziono: {numberProducts} produkty w {took}sec </span>
            </div>
        )}
      </Fragment>
    );
};


export default ProductsList;