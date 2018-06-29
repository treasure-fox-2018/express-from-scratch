const routes = require('express').Router()

routes.post('/', (req, res) => {
  res.render('student', {
    first_name: `${req.body.fistName}`, 
    last_name: `${req.body.lastName}`, 
    gender: `${req.body.gender}`, 
    birthday: `${req.body.birthday}`,
    email: `${req.body.email}`,
    password: `${req.body.password}`
  })
  res.render('student', {email: `${req.body.email}`, password: `${req.body.password}`})
})

module.exports = routes