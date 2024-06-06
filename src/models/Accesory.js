const mongoose = require('mongoose');

const AccesorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

const Accesory = mongoose.model('Accesory', AccesorySchema);

module.exports = Accesory;
