// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    idNumber: String,
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    password: String
});

module.exports = mongoose.model('User', userSchema);
