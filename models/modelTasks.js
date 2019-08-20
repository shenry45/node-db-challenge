const db = require('../data/db-config.js');

function getTasks() {
  return db('tasks');
}

function addTask(data) {
  return db('tasks')
    .insert(data);
}

module.exports = {
  getTasks,
  addTask
}