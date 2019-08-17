const express = require('express');

const routeProjects = require('./routes/routeProjects.js');

const server = express();

server.use(express.json());
server.use('/api/projects/', routeProjects);

server.get('/', (req, res) => {
  res.status(200).json({
    message: "Hello World"
  })
})

module.exports = server;