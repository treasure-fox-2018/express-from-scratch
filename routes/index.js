const routes = require('express').Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "I love Hacktiv8"
  });
});

module.exports = routes;
