'use strict'

const routes = require('express').Router()
const path = require('path')
const ejs = require('ejs')

// routes.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

routes.get('/', (req, res) => {
    res.render('homepage')
})

module.exports = routes
