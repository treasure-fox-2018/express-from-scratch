'use strict'

const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const Home = require('./routes/index');
const Student = require('./routes/student');
const Teacher = require('./routes/teacher');

app.set('view engine', 'ejs')
app.set(bodyParser.urlencoded({extended: false}))
app.set(bodyParser.json())

app.use('/', Home)
app.use('/student', Student)
app.use('/', Teacher)

app.listen(3000, () => console.log('App listening on port 3000'))
