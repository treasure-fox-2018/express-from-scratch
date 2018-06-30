const express = require('express')
const routes = express.Router()
let fs=require('fs');

let dataJSON=fs.readFileSync('./teachers.json', 'utf8');
let teacherList=JSON.parse(dataJSON);

routes.get('/', function (request, response){
  response.render('teachers', {title: 'teachers page' , teachers : teacherList})
})


module.exports = routes

