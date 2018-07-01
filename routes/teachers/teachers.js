var express = require('express');
var router = express.Router();
var data = require('../../teachers.json');

router.get('/', function(req, res){
   res.render("../views/teachers.ejs",{data: JSON.stringify(data.teachers),links: 'links:'})
   res.end();
});

// export this router to use in our index.js
module.exports = router;
