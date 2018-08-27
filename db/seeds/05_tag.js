
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('tag').insert([
        {post_id:"Interesting!", tag:2 ,count:0},
        {post_id:"Great Article!", tag:1 ,count:1},
        {post_id:"OHHHHHHH!", tag:3 ,count:1},
      ]);
    });
};
