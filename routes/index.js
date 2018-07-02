const routes = require('express').Router();
// const student = require('./student')


routes.get('/',(req,res) => {
    res.render('../views/home')
})


routes.get('/student',(req,res) => {
    res.render('../views/student')
})

routes.post('/student',(req,res) => {
    res.send('student has been registered')
})

routes.get('/teacher',(req,res) => {
    res.render('../views/teacher')
})

module.exports = routes





