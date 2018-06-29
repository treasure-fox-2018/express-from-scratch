const routes = require('express').Router();
var bodyParser = require('body-parser');
// var multer = require('multer')

routes.get('/',(req,res)=>{
    res.send("Welcome To Hogwarts Highschool")
    // res.status(200).json({message: 'Connected'})
    // res.send
});

routes.get('/student',function(req,res){ //req = request, res=response
    res.render('index',{title:'Student Form',h1:'Create Student Form here !! '})

})

routes.post('/student',function(req,res){
    // res.render('index',{title:'Student Form',h1:'Create Student Form here !! INI POST '})
    console.log(req.body)

})

module.exports = routes;