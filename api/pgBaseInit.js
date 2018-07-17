const { Client } = require('pg');
const Promise = require('bluebird');

const productsMock = require('./mock/products');
const categoriesMock = require('./mock/categories');

const connectionString = 'postgresql://dilven:password@localhost/shop';

const client = new Client({
  connectionString: connectionString,
})
client.connect()

const addProducts = item => {
  
  const values = [];
  for(const key in item) {
    if(item.hasOwnProperty(key) && key !== 'id') {
      values.push(item[key]);
    }
  }

  let query = '';
  query = `INSERT INTO products (name, image, category_name, price) VALUES($1, $2, $3, $4)`
  return client.query(query, values);
}

const addCategories = item => {

  const values = [];
  for(const key in item) {
    if(item.hasOwnProperty(key) && key !== 'id') {
      values.push(item[key]);
    }
  }

  let query = '';
  query = `INSERT INTO categories (name) VALUES($1)`
  return client.query(query, values);
}

Promise.map(productsMock, addProducts)
.then(() => Promise.map(categoriesMock, addCategories))
.then(() => {
  console.log('success')
})