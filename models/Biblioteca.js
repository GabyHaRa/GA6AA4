const mongoose = require("mongoose");
const bibliotecaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaVencimiento: {
        type: Date,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    formato: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('biblioteca', bibliotecaSchema);