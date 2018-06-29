const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.render('teacher')
})

module.exports = routes