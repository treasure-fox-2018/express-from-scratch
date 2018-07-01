const models = require('express').Router();
const teacher = require('./teacher')

models.get('/', teacher);

module.exports = models;