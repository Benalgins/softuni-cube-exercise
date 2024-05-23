const express = require('express');

const expressConfig = require('./config/expressConfiguration');
const handlebarsConfig = require('./config/handlebarsConfiguration');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cube', cubeController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
