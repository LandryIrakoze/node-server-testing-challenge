
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        {id: 1, name: 'charmander'},
        {id: 2, name: 'squirtle'},
        {id: 3, name: 'bulbasaur'},
        {id: 4, name: 'pikachu'}
      ]);
    });
};
