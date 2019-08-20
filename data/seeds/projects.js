
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Renewals SPA',
          description: 'Track your renewed services and be reminded when the renewal date is close.',
          completed: false
        },
        {
          name: 'Habit Kicker SPA',
          description: 'Pick a goal, work towards it, kick a habit.',
          completed: true
        },
      ]);
    });
};
