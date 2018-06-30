const routes = require('express').Router()
const bodyparse = require('body-parser')
const ejs = require('ejs')
let path = require('path')
// const routes = express.Router();


let bp = (bodyparse.urlencoded({ extended: false }));

// routes.get("/", (req, res) => {
//     res.send('i love hacktiv 8')

// })

routes.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})


routes.get('/student', (req, res) => {
    res.render('student.ejs', { Name: null, Email: null, About: null });
    console.log('port 3000 ONLINE')
});

routes.post('/student', bp, function (req, res) {
    res.render('studentData.ejs', { data: req.body })
})

routes.get('/teacher', (req, res) => {
    res.render('teacher.ejs');
});



module.exports = routes;
 