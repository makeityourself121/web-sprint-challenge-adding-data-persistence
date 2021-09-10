// build your `Project` model here
const db = require('../../data/dbConfig')

function findAll() {
  return db('projects')
}

async function findById(id) {
  return await db('projects').where('project_id', id).first()
}

async function insert(project) {
  const [id] = await db('projects').insert(project)
  return findById(id)
}

module.exports = {
  findAll,
  findById,
  insert,
}
