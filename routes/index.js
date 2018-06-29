const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('index', {name: "Hacktiv8"})
})

routes.get('/register', (req, res) => {
  res.render('register')
})

module.exports = routes