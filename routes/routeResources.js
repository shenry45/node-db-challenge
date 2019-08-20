const express = require('express');
const helmet = require('helmet');

const db = require('../models/modelResources.js');

const router = express.Router();

router.use(helmet());

router.get('/', async (req, res) => {
  try {
    const resources = await db.getResources();
    
    // resp
    if (resources.length) {
      res.status(200).json(resources);
    } else {
      res.status(400).json({
        message: "No resources are currently available"
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

  try {
    if (data.name) {
      const project = await db.addResource(data);
  
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