'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const routesIndex = require('./routes/index')
const routesStudent = require('./routes/student')
const routesTeacher = require('./routes/teacher')

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use('/', routesIndex)
app.use('/student', routesStudent)
app.use('/teacher', routesTeacher)

app.listen(3030, () => console.log(`Listening app on port http://localhost:3030 !`))
