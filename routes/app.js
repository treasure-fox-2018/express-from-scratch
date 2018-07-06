'use strict';

const express = require('express');
let app = express();



app.get('/', (req,res)=>{
    res.send("I love hacktv8")
})

app.get('/student', (req, res)=>{
    res.render('index')
})








app.listen(3000);

