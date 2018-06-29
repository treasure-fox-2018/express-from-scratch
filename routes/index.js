'use strict'

const routes = require('express').Router()

routes.get('/', function (req, res) {
    res.send("COME ON YOU GUNNERS !")
})

module.exports = routes
