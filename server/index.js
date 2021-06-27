const express = require('express');
const cors = require('cors');

// Mongo DB Config
const db = require('./db');

// Models Imports
const User = require('./models/userModel.js');

const app = express();
const apiPort = 3001;

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

db.on('error', console.error.bind(console, 'MongoDb Connection Error:'));

app.get('/', (req, res) => {
	res.send('Hellor World!');
});

// Get Users
app.get('/users', (req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Create User
app.post('/new-user', (req, res) => {
	const newUser = new User({
		name: req.body.name,
		cedula: req.body.cedula,
		phone: req.body.phone,
		email: req.body.email,
	});

	newUser
		.save()
		.then((user) => console.log(user))
		.catch((err) => res.status(400).json('Error: ' + err));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
