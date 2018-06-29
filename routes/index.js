'use strict'
const express = require('express')
let routes = express.Router()
let app = express()



routes.get('/',function(req,res){
    res.render('tesView')
})

module.exports = routes