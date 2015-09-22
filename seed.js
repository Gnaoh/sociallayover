var db = require("./models");

var seed_users = [{
	name: "John Doe",
	email: "johndoe@gmail.com",
	userName: "jdoe",
	password: 'work',
	job: "Mechanical Engineer",
	age: 32,
	facebook: "https://www.facebook.com/theejohndoe",
	instagram: "https://instagram.com/whatjohndoesays/",
	twitter: "https://twitter.com/johndoe",
	about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
	name: "Jane Doe",
	email: "Janedoe@gmail.com",
	userName: "jjdoe",
	password: "work",
	job: "Astronaut",
	age: 30,
	facebook: "https://www.facebook.com/thejanedoefanpage",
	instagram: "https://instagram.com/a_jane_doe/?hl=en",
	twitter: "https://twitter.com/janedoe",
	about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
	name: "Peter Hoang",
	email: "phonghoang@gmail.com",
	userName: "pvhoang",
	password: "work",
	job: "Software Engineer",
	age: 28,
	facebook: "https://www.facebook.com/KyleHoang",
	instagram: "https://instagram.com/hi.im.peter/",
	twitter: "https://twitter.com/PeterHoang_",
	about: "Hello, I\'m Peter and thanks for stopping by my layover profile. I\'m a software engineer living in the heart of downtown San Francisco, the epicenter of one of the largest tech hubs in the world.   I’m an innovative, passionate, ambitious, and results-driven individual who believes that success comes from hard work, perseverance, and a positive attitude. If you’re delayed and would like to chat, feel free to message me! Cheers."
	},
];

db.User.remove({}, function(err, user){
})

// creating seed data
for (var i = 0; i < seed_users.length; i++) {
  // pull out their information
  	name = seed_users[i].name;
  	job = seed_users[i].job;
  	age = seed_users[i].age;
  	email = seed_users[i].email;
  	facebook = seed_users[i].facebook;
  	twitter = seed_users[i].twitter;
  	instagram = seed_users[i].instagram;
  	userName = seed_users[i].userName;
  	password = seed_users[i].password;
  	about = seed_users[i].about;
  // create the new user
  db.User.createSecure(name, job, age, email, facebook, twitter, instagram, userName, password, about, function(err, user) {
    if (err) {return console.log(err);}
    console.log(user)
  });
}

