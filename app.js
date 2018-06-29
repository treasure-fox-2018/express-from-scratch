"use strict"
const routes = require('./routes/index');
const teacher = require('./routes/teacher');
const student = require('./routes/student');
const app = require('express')();
const ejs = require('ejs');
const bodyParser = require('body-parser');

// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.use("/", routes)
app.use(teacher, student)

app.listen("3000", () => {
  console.log("server...");
});
