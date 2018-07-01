const express = require('express');
const routes = express.Router();
const fs = require('fs');

//Connected to Routes
routes.get('/', (req, res) => {
  res.render('homepage', {title: "Hacktiv8 Students"});
})


module.exports = routes;

