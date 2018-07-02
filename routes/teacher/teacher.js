const express = require('express')

module.exports = ((req, res) => {
    let app = express()

    app.set('view engine', 'ejs')
    res.render('teacher', {})
})