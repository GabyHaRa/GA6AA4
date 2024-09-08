const express = require('express');
const router = express.Router();
const calendarioSchema = require("../models/calendario");

// crear calendario.
router.post('/calendario', (req, res) => {
    const calendario = calendarioSchema(req.body);
    calendario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Obtener todos los registros en el calendario. 
router.get('/calendario', (req, res) => {
    const calendario = calendarioSchema(req.body);
    calendario
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Mostrar registro especifico.
router.get('/calendario/:registro', (req, res) => {
    const { registro } = req.params;
    calendarioSchema
        .finByRegistro(registro)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Actualizar registro. 
router.put('/calendario/:registro', (req, res) => {
    const { registro } = req.params;
    const { título, fecha, hora, etiqueta, color, nota } = req.body;
    userSchema
        .updateOne({ _registro: registro }, { $set: { título, fecha, hora, etiqueta, color, nota } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Eliminar usuario
router.delete('/calendario/:registro', (req, res) => {
    const { registro } = req.params;
    userSchema
        .deleteOne({ _registro: registro })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router

