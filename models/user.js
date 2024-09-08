const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('user', userSchema);