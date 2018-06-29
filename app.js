`use strict`

const express = require("express")
let app = express()
app.set('view engine', 'ejs')
let index = require("./routes/index.js")


app.use('/',index)
app.get('/students/add',function(req,res){
    res.render('student_add')
})
app.get('/teacher',function(req,res){
    res.render('teacher')
})


app.listen(3000)

module.exports = app