const mongoose = require("mongoose");
const calendarioSchema = mongoose.Schema({
    título: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
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