const express = require('express')
const app = express()
const routes = require('./routes')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
app.use('/',routes)
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.send("welcome")
})


app.listen(3000)


module.exports = app