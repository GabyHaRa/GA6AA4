const express = require('express');
const router = express.Router();
const calendarioSchema = require("../models/puntaje");

// crear puntaje.
router.post('/puntaje', (req, res) => {
    const puntaje = calendarioSchema(req.body);
    puntaje
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Obtener todos los puntajes. 
router.get('/puntaje', (req, res) => {
    const puntaje = puntajeSchema(req.body);
    puntaje
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Actualizar puntaje. 
router.put('/puntaje/:id', (req, res) => {
    const { id } = req.params;
    puntajeSchema
        .updateOne({ _id: id }, { $set: { puntaje } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Eliminar puntaje.
router.delete('/puntaje/:id', (req, res) => {
    const { id } = req.params;
    puntajeSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router