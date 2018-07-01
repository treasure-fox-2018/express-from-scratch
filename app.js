'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const ejs = require('ejs');


let app = express()

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);

app.listen(3000);
