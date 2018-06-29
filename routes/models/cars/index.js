const cars = require('express').Router({mergeParams: true});
const all = require('./all');

cars.get("/", all);
// cars.get('/:carId', single);

module.exports = cars;
