const express = require('express');
const router = express.Router();
const Accesorry = require('../models/Accesory');

router.get('/create', (req, res) => {
  res.render('createAccessory');
});

router.post('/create', async (req, res) => {
  const { name, description, imageUrl } = req.body;
});

module.exports = router;
