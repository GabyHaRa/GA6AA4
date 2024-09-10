const express = require('express');
const router = express.Router();
const calendario = require('../models/Calendario'); 

//Ruta para crear un calendario
router.post('/calendarios', async (req, res) => {
    try {
      // Crear una nueva instancia del modelo con los datos del cuerpo de la petición
      const newCalendario = new calendario(req.body);
      // Guardar la nueva biblioteca en la base de datos
      const savedCalendario = await newCalendario.save();
      // Enviar la biblioteca guardada como respuesta
      res.status(201).json(savedCalendario);
    } catch (error) {
      // Manejar cualquier error
      res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener todos los calendarios
router.get('/calendarios', async (req, res) => {
  try {
    const calendarios = await calendario.find();
    res.json(calendarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un calendario por título
router.get('/calendarios/titulo/:titulo', async (req, res) => {
    try {
      const calendarios = await calendario.findOne({ titulo: req.params.titulo });
      if (!calendario) {
        return res.status(404).json({ message: 'Calendario no encontrado' });
      }
      res.json(calendarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar un calendario por título
router.put('/calendarios/titulo/:titulo', async (req, res) => {
    try {
        // Extrae los campos del cuerpo de la solicitud
        const { titulo, 
          fecha, 
          etiqueta, 
          color, 
          nota
        } = req.body;  
        // Actualiza el calendario con el título proporcionado
        const calendarios = await calendario.updateOne(
            // Filtro para identificar al calendario
            { titulo: req.params.titulo },
            // Campos a actualizar
            { $set: { titulo, 
              fecha, 
              etiqueta, 
              color, 
              nota
            }},
            { new: true } // Opción para devolver el documento actualizado
        );
        if (!calendario) {
            return res.status(404).json({ message: 'Calendario no encontrado' });
          }
          res.json(calendarios);
        } catch (error) {
          res.status(500).json({ message: error.message });
    }
});

// Ruta para eliminar un calendario por título
router.delete('/calendarios/titulo/:titulo', async (req, res) => {
    try {
      const calendarios = await calendario.deleteOne({ titulo: req.params.titulo });
      if (!calendario) {
        return res.status(404).json({ message: 'Calendario no encontrado' });
      }
      res.json({ message: 'Calendario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router;


