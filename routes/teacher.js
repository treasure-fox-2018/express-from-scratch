const express = require('express');
const router = express.Router()

router.get('/teacher', function(req,res){
  let data = [
    {name: 'Budi', email: 'budi@mail.com'},
    {name: 'Yudi', email: 'yudi@mail.com'},
    {name: 'Susi', email: 'susi@mail.com'}
  ]
  res.render('teacher', {dataTeacher : data})
})

module.exports = router;
