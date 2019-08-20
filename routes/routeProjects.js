const express = require('express');
const helmet = require('helmet');

const db = require('../models/modelProjects.js');

const router = express.Router();

router.use(helmet());

router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects();

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

router.post('/', async (req, res) => {
  const data = req.body;

  if (!data.completed) {
    data.completed = false;
  }

  try {
    if (data.name) {
      const project = await db.addProject(data);
  
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