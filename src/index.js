const express = require('express');

const expressConfig = require('./config/expressConfiguration');
const handlebarsConfig = require('./config/handlebarsConfiguration');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accesoryController = require('./controllers/accesoryController');
const dbConnect = require('./config/dbConfig');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB Error', err));

app.use(homeController);
app.use('/cube', cubeController);
app.use('/accesorry', accesoryController);
app.get('*', (req, res) => {
  res.redirect('/404');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
