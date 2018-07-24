const Promise = require('bluebird');

const productsMock = require('./mock/products');
const categoriesMock = require('./mock/categories');
const { pool } = require('./pgService');


const createTable = () => {
  return pool.query("CREATE TABLE products (id SERIAL PRIMARY KEY, name character(255), category_name character(255), price numeric, image text)")
    .then(() => {
      return pool.query("CREATE TABLE categories (id SERIAL PRIMARY KEY, name character(255))")
    })
    .then(() => {
      console.log('success');
    })
}

const addProducts = item => {
  
  const values = [];
  for(const key in item) {
    if(item.hasOwnProperty(key) && key !== 'id') {
      values.push(item[key]);
    }
  }

  let query = '';
  query = `INSERT INTO products (name, image, category_name, price) VALUES($1, $2, $3, $4)`
  return pool.query(query, values);
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
  return pool.query(query, values);
}
return createTable()
.then(()=> {
  Promise.map(productsMock, addProducts)
  .then(() => Promise.map(categoriesMock, addCategories))
  .then(() => {
    pool.end()
    console.log('success')
  })
})