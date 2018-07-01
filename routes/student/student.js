var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
   res.render("../views/student.ejs",{title:'This is the student form page!', subtitle:'fill out your form below:',links:'links:'})
   res.end();
});
router.post('/', function(req, res){
  let data = JSON.stringify(req.body)
   res.render("../views/student-post.ejs", {username: data.username, password: data.password, links:'links:'});
});

// export this router to use in our index.js
module.exports = router;
