const routes = require('express').Router();
const student = require('./student/student.js');
const teachers = require('./teachers/teachers.js');

routes.get('/', (req, res) => {
  res.render("../views/index.ejs",{title:'Welcome to our school webpage!',subtitle: 'Please click the desired option below:',links:'links:'})
});

routes.use('/student', student);
routes.use('/teachers', teachers);

module.exports = routes;
