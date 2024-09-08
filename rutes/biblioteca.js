const express = require('express');
const router = express.Router();
const bibliotecaSchema = require("../models/biblioteca");

// crear archivo.
router.post('/biblioteca', (req, res) => {
    const biblioteca = bibliotecaSchema(req.body);
    biblioteca
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Obtener todos los archivos en la biblioteca. 
router.get('/biblioteca', (req, res) => {
    const biblioteca = bibliotecaSchema(req.body);
    biblioteca
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Mostrar archivo especifico.
router.get('/biblioteca/:archivo', (req, res) => {
    const { archivo } = req.params;
    bibliotecaSchema
        .finByArchivo(archivo)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Actualizar archivo. 
router.put('/biblioteca/:archivo', (req, res) => {
    const { archivo } = req.params;
    const { tipo, etiqueta, fechaCreacion, horaCreacion, fechaVencimiento, horaVencimiento, comentario } = req.body;
    bibliotecaSchema
        .updateOne({ _archivo: archivo }, { $set: { tipo, etiqueta, fechaCreacion, horaCreacion, fechaVencimiento, horaVencimiento, comentario } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Eliminar archivo
router.delete('/biblioteca/:archivo', (req, res) => {
    const { archivo } = req.params;
    bibliotecaSchema
        .deleteOne({ _archivo: archivo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router

