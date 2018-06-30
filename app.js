'use strict'

const express = require('express')
let app = express()
let routes = require('./routes/index')

app.set('view engine', 'ejs')

app.use('/',routes)


app.listen(3000, () => console.log('my first express!!'))
