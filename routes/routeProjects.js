const express = require('express');
const helmet = require('helmet');

const db = require('../models/modelProjects.js');

const router = express.Router();

router.use(helmet());

router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects();

    if (projects) {
      res.status(200).json(projects);
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

module.exports = router;