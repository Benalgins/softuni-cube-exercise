const express = require('express');
const router = express.Router();
const cubeManager = require('../manager/cubeManager');

router.get('/', (req, res) => {
  const cubes = cubeManager.getAll();
  res.render('index', { cubes });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;