'use strict'

const express = require('express')
const routes = require('./routes')
let app = express()
// const ejs = require('ejs')

app.set('view engine','ejs')
app.use('/', routes)
app.listen(3000, () => {
    console.log('port 3000');
})



// app.use('/',routes)