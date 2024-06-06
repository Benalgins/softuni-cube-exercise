const express = require('express');
const router = express.Router();
const Accesorry = require('../models/Accesory');
const accesorryManager = require('../manager/accessoryManager');

router.get('/create', (req, res) => {
  res.render('createAccessory');
});

router.post('/create', async (req, res) => {
  console.log(req.body);
  const { name, description, imageUrl } = req.body;
  await accesorryManager.create({ name, description, imageUrl });
  res.redirect('/');
});

module.exports = router;
