const express = require('express');
const routes = require('./routes');
const ejs = require('ejs');
const bodyParser = require('body-parser')
let app = express();

app.set('view engine','ejs')

//step1
app.listen(3000,()=>{
    console.log('App listening on port 3000')
})


//step2
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',routes)

//step3
// app.get('/',function(req,res){ //req = request, res=response
//     res.send("I love Hacktiv8!")

// })
