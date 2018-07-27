const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const index = require('./routes/index.js')
const student = require('./routes/student.js')
const teacher = require('./routes/teacher.js')

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use('/', index)
app.use('/student', student)
app.use('/teacher', teacher)


app.listen(3000, function() {
    console.log('Online')
});
