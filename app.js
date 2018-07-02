'use strict'

const express = require ('express')
const routes = require('./routes')

let app = express()

app.set('view engine', 'ejs')

// app.use('')
app.get('/', (req, res) => {
    res.render('homepage', {nameSchool: 'Hacktiv8'})
})
app.use('/', routes)


// app.get('/', (req, res) => {
//     res.send('I Love Hacktiv8 trial nodemon')
// })

// app.listen(3000, () => {
//     console.log('App listening on port 300');
    
// })

app.listen(3000, () => {
    console.log('App listening on port 3000 app.js');
})