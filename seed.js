var db = require("./models");

// db.User.remove({}, function(err, user){
// })

db.User.find({}, function(err, user){
  console.log(user);
})
