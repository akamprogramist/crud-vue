const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  title: String,
  picked: String,
  description: String,
});

const Itemdb = mongoose.model("itemdb", schema);

module.exports = Itemdb;
