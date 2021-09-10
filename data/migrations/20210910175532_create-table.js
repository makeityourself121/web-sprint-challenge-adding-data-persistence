exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments('project_id')
      tbl.string('project_name', 128).notNullable()
      tbl.string('project_description', 255)
      tbl.boolean('project_completed').defaultTo(false)
    })

    .createTable('resources', (tbl) => {
      tbl.increments('resource_id')
      tbl.string('resource_name', 128).unique().notNullable()
      tbl.string('resource_description', 255)
    })

    .createTable('tasks', (tbl) => {
      tbl.increments('task_id')
      tbl.string('task_description', 255)
      tbl.string('task_notes', 255)
      tbl.boolean('task_completed').defaultTo(false)
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    .createTable('project_resources', (tbl) => {
      tbl.increments('item_id')
      tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      tbl
        .integer('resource_id')
        .notNullable()
        .unsigned()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
}
