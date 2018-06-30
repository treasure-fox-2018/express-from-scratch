// const express = require('express');
const routes = require('express').Router();
// const ejs = require('ejs');


routes.get('/', (req, res) => {
    res.render('homepage.ejs', {home: "EXPRESS EDUCATION",
                            paragraph: "Welcome to the start of your learning experience!"})
})

routes.get('/students', (req, res) => {
    res.render('students.ejs', {title: "Student's Form"})
})

routes.post('/students', (req, res) => {
    let data = req.body;
    res.render('studentdata.ejs', {
        firstname: `${data.firstname}`,
        lastname: `${data.lastname}`,
        gender: `${data.gender}`,
        email: `${data.email}`
    })
})

routes.get('/teachers', (req, res) => {
    res.render('teachers.ejs', {title: "Teachers Info",
                            message: `Contact`})
})
module.exports = routes;