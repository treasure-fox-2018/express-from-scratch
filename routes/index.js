const express = require('express')
const router = express.Router()


router.get('/', function(req, res){
    res.send('Ayyeeyy!')
})

router.get('/students', function(req, res){
    res.render('addStudent')
})

router.post('/students', function(req, res){
    res.send('Successfully input new student!')
})

router.get('/teachers', function(req, res){
    res.render('teachersData')
})


module.exports = router