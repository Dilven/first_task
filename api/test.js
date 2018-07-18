const { Client } = require('pg');
const connectionString = 'postgresql://dilven:password@localhost/shop';

const client = new Client({
  connectionString: connectionString,
})
client.connect()

const createTable = () => {
  return client.query('CREATE TABLE products (id SERIAL PRIMARY KEY, name character(255), category_name character(255), price numeric, image text)')
    .then(() => {
      return client.query('CREATE TABLE categories (id SERIAL PRIMARY KEY, name character(255))')
    })
    .then(() => {
      client.end()
      console.log('success');
    })
}

createTable();