const express = require('express');
const routes = express.Router();


routes.get('/teacher', function(req,res){
    let data = [
        {
            name:'cimz',
            email:'cim@mail.com'
        },
        {
            name:'mingz',
            email:'ingm@mail.com'
        },
        {
            name:'kimz',
            email:'kimz@mail.com'
        }

    ]
    res.render('teacher', {dataTeacher: data})
})



module.exports = routes