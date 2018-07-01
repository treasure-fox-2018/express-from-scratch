const routes = require ('express').Router();
const teachers = require ('../teacherData.json')

routes.get('/', (req, res) => {
  res.render('home')
})

routes.get('/student', (req, res) => {
  res.render('student-form')
})

routes.post('/student', (req, res) => {
  res.render('students-data', { data: req.body
  })
  console.log(data)
})

routes.get('/teachers', (req, res) => {
  res.render('teachers-data', {teachers})
})



module.exports = routes;