
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('projects', (tbl) => {
        tbl.increments('id')
          .primary();
        tbl.string('name')
          .notNullable();
        tbl.string('description');
        tbl.boolean('completed')
          .notNullable();
      })
      .createTable('tasks', (tbl) => {
        tbl.increments('id')
          .primary();
        tbl.string('description')
          .notNullable();
        tbl.string('notes');
        tbl.boolean('completed')
          .notNullable();
        tbl.integer('project_id')
          .notNullable()
          .references('projects.id');
      })
      .createTable('resources', (tbl) => {
        tbl.increments('id')
          .primary();
        tbl.string('name')
          .unique()
          .notNullable();
        tbl.string('description');
      })
      .createTable('projects-resources', (tbl) => {
        tbl.integer('project_id')
          .notNullable()
          .references('projects.id');
        tbl.integer('resource_id')
          .notNullable()
          .references('resources.id');
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('projects-resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  )
};
