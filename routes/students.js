let models = require

const express = require('express')
const app = express.Router()

app.get('/student', (req, res) => {
  res.render('student')

});



app.post('/student', (req, res) => {
  let obj = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    country: req.body.country,
    score: req.body.score
  }

  res.send(obj)
})




module.exports = app
