exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table)=>{
    table.increments();
    table.text('comment');
    table.integer('guest_id')
      .references('id')
      .inTable('guest')
      .onDelete('CASCADE')
      .index();
    table.integer('post_id')
      .references('id')
      .inTable('post')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
