
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'Push it',
          notes: '',
          completed: true,
          project_id: 1
        },
        {
          description: 'Pull it',
          notes: '',
          completed: true,
          project_id: 2
        },
        {
          description: 'Twist It',
          notes: '',
          completed: true,
          project_id: 2
        },
        {
          description: 'Flick It',
          notes: '',
          completed: true,
          project_id: 1
        },
        {
          description: 'Bop It',
          notes: '',
          completed: true,
          project_id: 1
        },
      ]);
    });
};
