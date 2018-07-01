'use strict'

const express = require('express');
const app = express();
const ejs = require('ejs');

const routes = require('./routes/index');
const teachers = require('./routes/teacher');
const students = require('./routes/student');

//Connected to Routes
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', routes);
app.use('/teachers', teachers);
app.use('/students', students);

var server = app.listen(3000, () => {
  console.log('listening on port', server.address().port);
});