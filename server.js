const express = require('express');

const routeProjects = require('./routes/routeProjects.js');
const routeResources = require('./routes/routeResources.js');
const routeTasks = require('./routes/routeTasks.js');

const server = express();

server.use(express.json());
server.use('/api/projects/', routeProjects);
server.use('/api/resources/', routeResources);
server.use('/api/tasks/', routeTasks);

server.use('/', (req, res) => {
  res.send('<h1>Projects Database</h1><p>Take the door on the left.</p>');
})

module.exports = server;