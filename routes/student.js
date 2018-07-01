const express = require('express')
const app = express.Router()

app.get('/student', (req, res) => {
  res.render('student')
});

app.post('/student', (req, res) => {
  let student = req.body
  res.send(student)
})

module.exports = app