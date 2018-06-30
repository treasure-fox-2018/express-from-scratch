'use strict'
const express   = require('express');
const routes = require('./routes');
const ejs = require('ejs');
var bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', routes)
// app.use()



app.listen('3000', () => {
    console.log('server started at port 3000')
})