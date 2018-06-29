'use strict'
const express = require('express')
let app = express()
const routes = require('./routes/index')
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(3000)