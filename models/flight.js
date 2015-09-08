var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FlightSchema = new Schema({
  // _id: (mongod Id)
  api_id: Number,
  users: String
});

var Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;