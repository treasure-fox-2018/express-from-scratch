let express = require('express');
let routes = express.Router();

routes.get('/', function(req,res){
    res.render('home.ejs', {
        home: 'front Page',
        paragraph: 'hallooo'
    })
})