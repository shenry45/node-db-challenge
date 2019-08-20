const express = require('express');
const helmet = require('helmet');

const dbProj = require('../models/modelProjects.js');
const dbReso = require('../models/modelResources.js');
const dbTask = require('../models/modelTasks.js');

const router = express.Router();

router.use(helmet());

router.get('/', async (req, res) => {
  try {
    const projects = await dbProj.getProjects();

    // check if completed value is int or bool
    const completedFormat = projects.map(proj => {
      if (proj.completed === 1) {
        proj.completed = true;
      } else {
        proj.completed = false;
      }

      return proj;
    })
    
    // resp
    if (projects.length) {
      res.status(200).json(completedFormat);
    } else {
      res.status(400).json({
        message: "No projects are currently available"
      })
    }
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

// STRETCH
router.get('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const project = await dbProj.getProjectByID(id);
    
    // resp
    if (project) {
      const tasks = await dbTask.getTasksByProjID(id);
      const resources = await dbReso.getResourcesByProjID(id);

      // project.tasks = tasks;
      // project.resources = resources;

      res.status(200).json({
        ...project,
        tasks,
        resources
      });
    } else {
      res.status(400).json({
        message: "No projects are currently available"
      })
    }
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

router.post('/', async (req, res) => {
  const data = req.body;

  if (!data.completed) {
    data.completed = false;
  }

  try {
    if (data.name) {
      const project = await dbProj.addProject(data);
  
      if (project) {
        res.status(201).json(project);
      }
    } else {
      res.status(400).json({
        message: "All required fields not found"
      })
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
});

module.exports = router;