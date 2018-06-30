const express = require('express')
const routes = express.Router()

routes.get('/', function (request, response){
  response.render('index', {title: 'home page'})
})


module.exports = routes