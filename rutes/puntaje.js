/*const express = require('express');
const router = express.Router();
const calendarioSchema = require("../models/Puntaje");

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
*/
const express = require('express');
const router = express.Router();
const puntaje = require('../models/Puntaje'); 
const Puntaje = require('../models/Puntaje');

//Ruta para crear un puntaje
router.post('/puntajes', async (req, res) => {
    try {
      // Crear una nueva instancia del modelo con los datos del cuerpo de la petición
      const newPuntaje = new puntaje(req.body);
      // Guardar el nuevo puntaje en la base de datos
      const savedPuntaje = await newPuntaje.save();
      // Enviar el puntaje guardado como respuesta
      res.status(201).json(savedPuntaje);
    } catch (error) {
      // Manejar cualquier error
      res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener todos los puntajes
router.get('/puntajes', async (req, res) => {
  try {
    const puntajes = await puntaje.find();
    res.json(puntajes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un puntaje por id
router.get('/puntajes/:id', async (req, res) => {
    try {
      const puntajes = await puntaje.findById( req.params.id );
      if (!puntajes) {
        return res.status(404).json({ message: 'Puntaje no encontrado' });
      }
      res.json(puntajes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  

// Ruta para eliminar un puntaje por id
router.delete('/puntajes/:id', async (req, res) => {
    try {
      const puntajes = await puntaje.findByIdAndDelete( req.params.id );
      if (!puntajes) {
        return res.status(404).json({ message: 'Puntaje no encontrado' });
      }
      res.json({ message: 'Puntaje eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router;