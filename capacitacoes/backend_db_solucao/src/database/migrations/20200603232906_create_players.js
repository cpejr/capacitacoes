exports.up = function (knex) {
  return knex.schema.createTable('players', function (table) {
    table.increments();
    table.string('name').defaultTo('undefined').notNullable();
    table.integer('age').defaultTo(0).notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('players');
};