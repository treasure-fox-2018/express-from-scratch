'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser') // buat masukin data json

const Home = require ('./routes/index.js')
const Student = require('./routes/student.js')
const Teacher = require('./routes/teacher')

// wajib buat ejs nya
app.set('view engine', 'ejs')

// wajib buat nampilin data di object of array
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', Home)
app.use('/student', Student)
app.use('/teacher', Teacher)

app.listen(3000)

// step
// 1. install npm init, express, body-parser, ejs
// 2. bikin app.js isi const express = require express 
//     2a. const app = express()
//     2b. const bodyParser = require
// 3. tes app.listen