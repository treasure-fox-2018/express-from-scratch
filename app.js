"use strict"
const routes = require('./routes/index');
const app = require('express')();

app.use("/", routes)

app.listen("3000", () => {
  console.log("server...");
})
