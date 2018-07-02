const routes = require('express').Router()
const student = require('./student')
const teacher = require('./teacher')

routes.use('/student', student)
routes.use('/teacher', teacher)

routes.get('/', (req, res) => {
    res.status(200).json({message:'Conected! with routes'})
})

module.exports = routes