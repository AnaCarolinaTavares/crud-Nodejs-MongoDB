const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const tippy = require('tippy.js');
const app  = express();



app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));




consign()
  .include('./app/routes')
  .then('app/controllers')
  .into(app);


module.exports = app;
