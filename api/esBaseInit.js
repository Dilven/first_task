const { indexData, initMapping } = require('./esService');
const productsMock = require('./mock/products');
const categoriesMock = require('./mock/categories');
const Promise = require('bluebird');

Promise.map(productsMock, (product) => {
  indexData('products', 'entries', product.id, product);
})
.then(Promise.map(categoriesMock, (category) => {
  indexData('categories', 'entries', category.id, category);
}))