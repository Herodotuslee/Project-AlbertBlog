
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {comment:"Nice!", guest_id:1 ,post_id:1},
        {comment:"Interesting!", guest_id:2 ,post_id:2},
        {comment:"Great Article!", guest_id:1 ,post_id:1},
        {comment:"OHHHHHHH!", guest_id:3 ,post_id:1},
      ]);
    });
};
