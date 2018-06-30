const express = require('express')
const routes = express.Router()

routes.get('/', function(req,res){
    res.send('Index')
})

routes.get('/student',function(req,res){
    res.render('student')
})

routes.post('/student',function(req,res){
    res.send('Student has been Registered')
})

routes.get('/teacher', function(req,res){
    res.render('teacher')
})

module.exports =  routes