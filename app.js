'use strict'

const express = require('express')
const ejs = require('ejs')
let app = express()

app.set('view engine', 'ejs');
app.get('/', (req,res) => res.send('Hello World!'))

app.listen(3000)
