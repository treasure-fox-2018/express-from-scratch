const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' })
})

routes.get('/students', (req, res) => {
  res.send('Students page')
})

routes.post('/students', (req, res) => {
  res.redirect('/students')
})

routes.get('/teachers', (req, res) => {
  res.send('Teachers page')
})

module.exports = routes