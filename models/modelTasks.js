const db = require('../data/db-config.js');

function getTasks() {
  return db('tasks');
}

function getTasksByProjID(id) {
  return db('tasks')
    .where('id', id);
}

function addTask(data) {
  return db('tasks')
    .insert(data);
}

module.exports = {
  getTasks,
  getTasksByProjID,
  addTask
}