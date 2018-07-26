const products = require('../mock/products');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('category_name').notNullable();
    table.float('price').notNullable();
    table.string('image').notNullable();
  })
    .then(() => {
      return knex("products").insert(products.map(product => {
        return {
          name: product.name,
          category_name: product.category_name,
          price: product.price,
          image: product.image
        }
      }))
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
