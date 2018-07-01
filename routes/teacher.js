const express = require('express');
const teachers = express.Router();
let fs=require('fs');

let dataJSON=fs.readFileSync('./teachers.json', 'utf8');
let teacherList=JSON.parse(dataJSON);

//Connected to Routes

teachers.get('/', (req, res) => {
  res.render('teacher', {title: "Teachers", teacherList : teacherList});
})

module.exports = teachers