const app = require('express').Router();
// const models = require('./models');
const ejs = require('ejs');

app.get("/student", function (req, res) {
  res.render("../views/student-page.ejs", {Form: "Student Registration", Message: "Be prepared!"})
  res.end();
});

app.post("/student", function (req, res) {
  let info = req.body;
  // console.log(info);
  res.render("../views/student-dashboard.ejs", {Username: String(info.username), Password: String(info.psw)})
  res.end();
})

module.exports = app;
