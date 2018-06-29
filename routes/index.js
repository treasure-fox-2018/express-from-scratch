const express = require('express')
const routes = express()

routes.get('/home',function(req,res){
    res.send("jhmasuk index sdfgjhdg")
})

routes.get('/student',function(req,res){
    res.render('student_form')
})

routes.post('/student',function(req,res){
    res.send("successfully add student")
})

routes.get('/teachers',function(req,res){
    res.render('teacher_table')
})

module.exports = routes