const mongoose = require("mongoose");
const calendarioSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    etiqueta: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: true
    },
    nota: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('calendario', calendarioSchema);