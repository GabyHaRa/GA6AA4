// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    identificacion: String,
    correoElectronico: { type: String, unique: true },
    usuario: { type: String, unique: true },
    contraseña: String
});

module.exports = mongoose.model('User', userSchema);
