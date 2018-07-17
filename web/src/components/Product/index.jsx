import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './style.css'

const Product = ({ product }) => {
  return (
    <li className="list_item">
      <Card>
        <img
          className="product-image"
          src={product.image}
          alt="product"
        />
        <CardContent>
          <h2 className="list_item_name">
            {product.name}
          </h2>
          <hr/>
          <Typography component="p">
            { product.desc ? product.desc : <span>Description</span> }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <IconButton color="primary" aria-label="Add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </li>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
