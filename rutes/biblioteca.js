const express = require('express');
const router = express.Router();
const biblioteca = require('../models/Biblioteca'); 

//Ruta para crear una biblioteca
router.post('/bibliotecas', async (req, res) => {
    try {
      // Crear una nueva instancia del modelo con los datos del cuerpo de la petición
      const newBiblioteca = new biblioteca(req.body);
      // Guardar la nueva biblioteca en la base de datos
      const savedBiblioteca = await newBiblioteca.save();
      // Enviar la biblioteca guardada como respuesta
      res.status(201).json(savedBiblioteca);
    } catch (error) {
      // Manejar cualquier error
      res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener todas las bibliotecas
router.get('/bibliotecas', async (req, res) => {
  try {
    const bibliotecas = await biblioteca.find();
    res.json(bibliotecas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener una biblioteca por título
router.get('/bibliotecas/titulo/:titulo', async (req, res) => {
    try {
      const bibliotecas = await biblioteca.findOne({ titulo: req.params.titulo });
      if (!bibliotecas) {
        return res.status(404).json({ message: 'Biblioteca no encontrada' });
      }
      res.json(bibliotecas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar una biblioteca por título
router.put('/bibliotecas/titulo/:titulo', async (req, res) => {
    try {
        // Extrae los campos del cuerpo de la solicitud
        const { titulo, 
          fechaCreacion, 
          fechaVencimiento, 
          valorTotal, 
          tipo, 
          estado, 
          formato } = req.body;  
        // Actualiza la biblioteca con el título proporcionado
        const bibliotecas = await biblioteca.updateOne(
            // Filtro para identificar a la biblioteca
            { titulo: req.params.titulo },
            // Campos a actualizar
            { $set: { titulo, 
              fechaCreacion, 
              fechaVencimiento, 
              valorTotal, 
              tipo, 
              estado, 
              formato 
            }},
            { new: true } // Opción para devolver el documento actualizado
        );
        if (!bibliotecas) {
            return res.status(404).json({ message: 'Biblioteca no encontrada' });
          }
          res.json(bibliotecas);
        } catch (error) {
          res.status(500).json({ message: error.message });
    }
});

// Ruta para eliminar una biblioteca por título
router.delete('/bibliotecas/titulo/:titulo', async (req, res) => {
    try {
      const bibliotecas = await biblioteca.deleteOne({ titulo: req.params.titulo });
      if (!bibliotecas) {
        return res.status(404).json({ message: 'Biblioteca no encontrada' });
      }
      res.json({ message: 'Biblioteca eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router;

