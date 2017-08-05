
exports.up = function(knex, Promise) {

  return knex.schema.createTable('todos', function(table) {
  table.increments('id');
  table.string('text');
  table.boolean('complete');

})
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos');
};
