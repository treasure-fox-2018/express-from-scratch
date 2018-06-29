const express = require('express')
let ejs = require('ejs')
const app = express()
var bodyParser = require('body-parser')
let home = require('./routes/index.js')
let student = require('./routes/students.js')
let teacher = require('./routes/teachers.js')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.set('view engine', 'ejs')
app.use('/', home)
app.use(student, teacher)


app.listen(3000, () => console.log('Running'))
