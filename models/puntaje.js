const mongoose = require("mongoose");
const puntajeSchema = mongoose.Schema({
    puntaje: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('puntaje', puntajeSchema);