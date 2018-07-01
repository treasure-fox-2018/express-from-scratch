const data = require('../teacherData.json');

module.exports = (req, res) => {
  res.json(data);
}