'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const routes = require('./routes/index.js')
const student = require('./routes/student.js')
const teacher = require('./routes/teacher.js')
// const ejs = require('ejs')
// let routes = require('./routes/index')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',routes)
app.use('/',student)
app.use('/',teacher)
app.set('view engine', 'ejs');


// app.get('/',(req,res) => 
//     res.send('Hello World')
// )

app.listen(3000, () => console.log('my express!!'))
