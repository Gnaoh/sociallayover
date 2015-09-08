var mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOLAB_URL ||
  "mongodb://localhost/social_layover")

module.exports.User = require("./user");
module.exports.Flight = require("./flight");

