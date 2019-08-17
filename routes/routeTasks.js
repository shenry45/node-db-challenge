const express = require('express');
const helmet = require('helmet');

const db = require('../models/modelTasks.js');

const router = express.Router();

router.use(helmet());

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getTasks();

    // check if completed value is int or bool
    const completedFormat = tasks.map(task => {
      if (task.completed === 1) {
        task.completed = true;
      } else {
        task.completed = false;
      }

      return task;
    })
    
    // resp
    if (tasks.length) {
      res.status(200).json(completedFormat);
    } else {
      res.status(400).json({
        message: "No tasks are currently available"
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
    if (data.description && data.project_id) {
      const task = await db.addTask(data);
  
      if (task) {
        res.status(201).json(task);
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