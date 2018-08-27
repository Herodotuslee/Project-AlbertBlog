
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('guest').del()
    .then(function () {
      // Inserts seed entries
      return knex('guest').insert([
        {name: 'Elijah', email: 'elijah@test.com', password:'1234'},
        {name: 'Jake', email: 'jake@test.com', password:'1234'},
        {name: 'Chelsea', email: 'chelsea@test.com', password:'1234'}
      ]);
    });
};
