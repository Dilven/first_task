import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Product = ({ product }) => {
  return (
    <li className="list__item">
      <span>Product name: {product.name}</span><br/>
      <span>Price: {product.price}</span>
      <IconButton color="primary" aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </li>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product