const app = require('express').Router();
// const models = require('./models');
const ejs = require('ejs');

// app.use('/models', models);

app.get("/", (req, res) => {
  res.render("../views/home-page.ejs", {Home: "Wolf School of Witcher", Paragraph: "Ready to be witness the next Geratlt of Rivia?"})
});


module.exports = app;
