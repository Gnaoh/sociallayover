// require dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs');

// var FlightSchema = new Schema({
//   // _id: (mongod Id)
//   api_id: Number,
//   users: String
// });

// create user schema
var UserSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  userName: {type: String, required: true},
  password: {type: String, required: true},
  about: {type: String},
  createdAt: {type: Date, default: Date.now() },
});

// create a new user with secure (hashed) password (for sign up)
UserSchema.statics.createSecure = function (firstName, lastName, userName, password, about, cb) {
  // `_this` now references our schema
  var _this = this;
  // generate some salt 
bcrypt.genSalt(function (err, salt) {
  //hash the password with salt
  bcrypt.hash(password, salt, function (err, hash) {
    // build the user object
    var user = {
      firstName: firstName,
      lastName:  lastName,
      userName: userName,
      password: hash,
      about: about,
      createdAt: Date.now()
    };
    // create a new user in the db with hashed password and execute the callback when done
    _this.create(user, cb);
  });
});
};

// authenticate user (for login)
UserSchema.statics.authenticate = function (userName, password, cb) {
  // find user by email entered at log in
  this.findOne({userName: userName}, function (err, user) {
    // throw error if can't find user
    if (user === null) {
      cb("Can\'t find user with that username", null);
    // if found user, check if password is correct
    } else if (user.checkPassword(password)) {
      // the user is found & password is correct, so execute callback
      // pass no error, just the user to the callback
      cb(null, user);
    } else {
      // user found, but password incorrect
      cb("password incorrect", user)
    }
  });
};

// compare password user enters with hashed password (`password`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password to compare with stored `password`
  // `compareSync` is like `compare` but synchronous
  // returns true or false
  return bcrypt.compareSync(password, this.password);
};

// define user model
var User = mongoose.model('User', UserSchema);

// export user model
module.exports = User;
