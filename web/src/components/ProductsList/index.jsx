import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import ('./style.css');

const renderProduct = (product) => {
  return (
    <li className="products-list__item" key={product.id}>
      <span>{product.name}</span> 
      <IconButton color="primary" aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </li>
  );
};

const ProductsList = (props) => {
    return (
      <Fragment>
        <ul className="produc ts-list">
          {props.products.map(product => renderProduct(product))}
        </ul>
        Znaleziono: {props.numberProducts} produkty w {props.took}sec
      </Fragment>
    );
};


export default ProductsList;