'use strict'

const express = require('express')
const app = express()

let routeIndex = require('./routes/index')
let routeStudent = require('./routes/student')
let routeTeacher = require('./routes/teachers')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine','ejs');
app.set('views',__dirname + '/views')
app.use(express.static('public'))

app.use('/', routeIndex)


app.use('/student', routeStudent)

app.use('/teachers', routeTeacher)

app.listen(3000 ,function () {
  console.log("server is running")
})