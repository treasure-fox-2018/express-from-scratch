'use strict'

const express = require('express')
let app = express()

app.get('/', function (req, res) {
    res.send("COME ON YOU GUNNERS !")
})

app.listen(3000)
