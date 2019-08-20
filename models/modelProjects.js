const db = require('../data/db-config.js');

function getProjects() {
  return db('projects');
}

//stretch
function getProjectByID(id) {
  return db('projects as p')
    .where('id', id);
}

function addProject(data) {
  return db('projects')
    .insert(data);
}

module.exports = {
  getProjects,
  getProjectByID,
  addProject
}