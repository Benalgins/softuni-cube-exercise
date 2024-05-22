const express = require('express');

const expressConfig = require('./config/expressConfiguration');
const handlebarsConfig = require('./config/handlebarsConfiguration');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

//Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
