const express = require('express');
const students = express.Router();
const fs = require('fs');

students.get('/', (req, res) => {
  res.render('student', {title: 'student add form'})
})

students.post('/', (req, res) => {
  let saveData = JSON.stringify(req.body)
  fs.writeFileSync('./student.json', saveData)
  res.send("data is successfully submitted")
})

module.exports = students;
