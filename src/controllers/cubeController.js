const express = require('express');
const router = express.Router();
const cubeManager = require('../manager/cubeManager');

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });

  res.redirect('/');
});

router.get('/:cubeid/details', async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeid).lean();
  if (!cube) {
    return res.redirect('/404');
  }

  res.render('details', { cube });
});

module.exports = router;
