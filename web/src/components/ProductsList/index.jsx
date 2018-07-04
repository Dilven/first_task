import React from 'react';

const renderProduct = (product) => {
  return (
    <li key={product.id}> {product.name} </li>
  );
};

const ProductsList = (props) => {
    return (
      <ul>
        {props.products.map(product => renderProduct(product))}
      </ul>
    );
};


export default ProductsList;