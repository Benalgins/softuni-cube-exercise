const express = require('express');
const router = express.Router();
const cubeManager = require('../manager/cubeManager');

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });

  res.redirect('/');
});

router.get('/:cubeid/details', (req, res) => {
  const cubes = cubeManager.getAll();
  const cubeid = req.params.cubeid;
  const cube = cubes.find((x) => x.id === cubeid);

  res.render('details', { cube });
});

module.exports = router;
