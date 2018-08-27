
exports.up = function(knex, Promise) {
  return knex.schema.createTable("tag",(table)=>{
    table.increments();
    table.string("tag_name");
    table.string("tag_number");
    table.integer("admin_id")
    .references("id")
    .inTable("admin")
    .onDelete("CASCADE")
    .index();
    table.integer("post_id")
    .references("id")
    .inTable("admin")
    .onDelete("CASCADE")
    .index();
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tag");
};
