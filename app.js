'use strict'

const express = require('express');
const app = express();
const routes = require('./routes/index');
const path = require('path')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/student', routes);
app.use('/teacher', routes);

app.listen('3000', () => {
    console.log('server started at port 3000')
})
module.exports = app
