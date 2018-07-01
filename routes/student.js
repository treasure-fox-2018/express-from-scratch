const express = require('express');
const routes = express.Router();


routes.get('/student', function(req,res){
    res.render('student.ejs')
})

routes.post('/student', function(req,res){
    console.log(req.body)
})

module.exports = routes