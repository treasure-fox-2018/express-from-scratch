const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.render('form')
});

app.post('/', (req, res) => {
  let student = req.body
  // res.send(student)
  res.send(student)
})

module.exports = app