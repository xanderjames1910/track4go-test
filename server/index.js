const express = require('express');
const cors = require('cors');

// Mongo DB Config
const db = require('./db');

// Models Imports
const User = require('./models/userModel.js');

const app = express();
const apiPort = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

db.on('error', console.error.bind(console, 'MongoDb Connection Error:'));

app.get('/', (req, res) => {
	res.send('El Servidor se ha levantado correctamente.');
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
		.then((user) => res.json(user))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Delete User
app.delete('/user-delete/:id', (req, res) => {
	const id = req.params.id;

	User.findOneAndDelete({ _id: id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: `Usuario no encontrado` });
		}

		return res.status(200).json({ success: true, data: user });
	}).catch((err) => console.log(err));
});

// Update User
app.put('/edit-user/:id', (req, res) => {
	const updatedUser = {
		name: req.body.name,
		cedula: req.body.cedula,
		phone: req.body.phone,
		email: req.body.email,
	};

	User.findByIdAndUpdate(
		{ _id: req.params.id },
		{ $set: updatedUser },
		(err, user) => {
			if (err) {
				return res.status(400).json({ success: false, error: err });
			}

			if (!user) {
				return res
					.status(404)
					.json({ success: false, error: `Usuario no encontrado` });
			}

			return res.status(200).json({ success: true, data: user });
		}
	);
});

app.listen(apiPort, '0.0.0.0', () =>
	console.log(`Server running on port ${apiPort}`)
);
