const routes = require('express').Router()
const teacher = require('./teacher')

routes.get('/', teacher)

module.exports = routes