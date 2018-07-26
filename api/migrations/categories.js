const categories = require('../mock/categories');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table => {
    table.increments();
    table.string('name').notNullable();
  })
  .then(() => {
    return knex("categories").insert(categories.map(category => {
      return { name: category.name }
    }))
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
};
