const db = require('../data/db-config.js');

function getResources() {
  return db('resources');
}

function addResource(data) {
  return db('resources')
    .insert(data);
}

module.exports = {
  getResources,
  addResource
}