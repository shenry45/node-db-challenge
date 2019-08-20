const db = require('../data/db-config.js');

function getResources() {
  return db('resources');
}

function getResourcesByProjID(id) {
  return db('resources as r')
    .join('projects-resources as pr', 'r.id', 'pr.project_id')
    .where('pr.project_id', id);
}

function addResource(data) {
  return db('resources')
    .insert(data);
}

module.exports = {
  getResources,
  getResourcesByProjID,
  addResource
}