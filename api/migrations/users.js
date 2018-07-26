
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('nick').notNullable().unique();
    table.string('name').notNullable();
    table.string('password').notNullable();
  })
    .then(() => {
      return knex("users").insert([
        {
          nick: "admin",
          name: "admin",
          password: "password"
        }
      ])
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
