const express = require('express');
const router = express.Router();
const cuid = require('cuid');

let cubes = [];

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubes.push({
    id: cuid(),
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  console.log(cubes);

  res.redirect('/');
});

module.exports = router;
