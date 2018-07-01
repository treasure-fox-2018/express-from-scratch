const express = require('express');
const routes = express.Router();

routes.get('/', function(req,res){
    res.render('about.ejs')
})
// routes.get('/', function(req,res){
//     res.send('Home')
// })


module.exports = routes
//route : import express, routes (express.Router())

