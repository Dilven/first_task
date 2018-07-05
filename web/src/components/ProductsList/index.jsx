import React from 'react';
import ('./style.css');

const renderProduct = (product) => {
  return (
    <li className="products-list__item" key={product.id}>
      <span>{product.name}</span> 
    </li>
  );
};

const ProductsList = (props) => {
    return (
      <ul className="products-list">
        {props.products.map(product => renderProduct(product))}
      </ul>
    );
};


export default ProductsList;