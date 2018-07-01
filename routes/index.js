
const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
  res.send('index');
});




module.exports = app
const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
  res.send('index');
});

module.exports = app