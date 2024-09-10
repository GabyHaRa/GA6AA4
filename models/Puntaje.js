const mongoose = require("mongoose");
const puntajeSchema = mongoose.Schema({
    puntaje: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
})

module.exports = mongoose.model('puntaje', puntajeSchema);