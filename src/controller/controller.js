const Itemdb = require("../model/model");

// create a new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // create new user
  const item = new Itemdb({
    title: req.body.title,
    picked: req.body.picked,
    description: req.body.description,
  });
  // save user in the database
  item
    .save(item)
    .then((data) => {
      //res.send(data);
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occured while creating a create operation",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Itemdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "not found user with id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error retrieving user with id" + id });
      });
  } else {
    Itemdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error occured while reteiving user information",
        });
      });
  }
};
