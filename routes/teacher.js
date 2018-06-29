const app = require('express').Router();
// const models = require('./models');
const ejs = require('ejs');

app.get("/teacher", (req, res) => {
  res.render("teacher.ejs", {Teacher1: "Ms. Halo", Teacher2: "Mr. Halo"})
});

module.exports = app;
