
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("grocery_item", function(table){
    table.increments("id").primary();
    table.string("item").notNullable();
    table.integer("quantity").notNullable();
    table.string("units");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("grocery_item");
};
