const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const tippy = require('tippy.js');
const app  = express();



app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(express.static('./app/public'));

consign()
  .include('./app/routes').into(app);


module.exports = app;
