const mongoose = require("mongoose");
const bibliotecaSchema = mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    etiqueta: {
        type: String,
        required: false
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    horaCreacion: {
        type: String,
        required: true
    },
    fechaVencimiento: {
        type: Date,
        required: true
    },
    horaVencimiento: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: false
    }


})

module.exports = mongoose.model('biblioteca', bibliotecaSchema);