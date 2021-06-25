exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.string("user_id").primary().notNullable();
    table.integer("age").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
