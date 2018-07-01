const express = require('express');
const router = express.Router()

router.get('/', function(req,res){
    res.render('student')
})

router.post('/add', function(req,res) {
  // console.log(req.body);
  res.send("data sudah di input")
})

module.exports = router;
