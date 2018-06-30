'use strict'

const app = require('express')()
const routes = require('./routes')
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(3000)
