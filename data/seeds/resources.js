
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Adobe Creative Suite',
          description: ''
        },
        {
          name: 'Pliers',
          description: 'A tool for applying perpendicular pressure'
        },
        {
          name: 'Ron the Plumber',
          description: 'The man with the plan'
        }
      ]);
    });
};
