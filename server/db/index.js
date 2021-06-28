const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://track4go:Track4Go.2021@userstrack4go.zpgg0.mongodb.net/usersTest?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
	)
	.catch((e) => {
		console.error('Connection error', e.message);
	});

const db = mongoose.connection;

module.exports = db;
