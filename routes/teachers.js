const express = require('express')
const app = express.Router()

app.get('/teachers', (req, res) => {
  res.render('teacher')
});


module.exports = app
