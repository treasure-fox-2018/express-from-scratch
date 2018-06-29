const express = require('express')
const router = express.Router()



router.get('/', function(req,res){
    res.render("home")
})

router.get('/student', function(req,res){
    res.render("student")
})

router.post('/student',function(req,res){
    console.log(req.body)
    res.send(`halo, ${req.body.firstname} ${req.body.lastname}`)
})

router.get('/teachers', function(req,res){
    res.render("teachers")
})


module.exports = router