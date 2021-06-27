const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
	{
		name: { type: String, required: true },
		cedula: { type: String, required: true },
		phone: { type: String, required: true },
		email: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('users', User);