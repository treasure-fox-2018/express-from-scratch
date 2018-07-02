const routes = require('express').Router()
const student = require('./student')

routes.get('/', student)

module.exports = routes