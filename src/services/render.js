const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // make a get request to /api/users
  axios
    .get("http://localhost:1000/api/items")
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
