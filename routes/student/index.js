const routes = require('express').Router();

routes.get('./',function(req,res){
    // res.render('.../views/student.ejs')
    res.send('sudent')
})

module.exports = routes;