const Accesory = require('../models/Accesory');

exports.create = async (accesoryData) => {
  console.log(accesoryData);
  const accesory = new Accesory(accesoryData);

  await accesory.save();
  return accesory;
};
