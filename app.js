const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const home = require('./routes/index.js')
const student = require('./routes/student.js')
const teacher = require('./routes/teacher.js')

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use('/', home)
app.use(student, teacher)

app.listen(3000, function() {
    console.log('Listening on port 3000')
});