// const routes = require('express').Router()
const express = require('express')

module.exports = ((req, res) => {
    // const student = data.students
    const app = express()
    // res.status(200).json({ student })
    app.set('view engine', 'ejs')
    res.render('student', {})
})
// routes.get('/student', (req, res) => {
//     res.status(200).json({message:'Connected with student!'})
// })

// module.exports = routes