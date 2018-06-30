const express = require('express')
const routes = express.Router()

routes.get('/', function (request, response) {
  response.render('student', {title: 'student add form'})
})

routes.post('/', function (request, response) {
  console.log(request.body)
  response.send("thanks data successfully submitted")
})

module.exports = routes