/*const express = require('express');
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
*/
const express = require('express');
const router = express.Router();
const biblioteca = require('../models/Biblioteca'); 

//Ruta para crear un usuario
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

// Ruta para obtener todos los usuarios
router.get('/bibliotecas', async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un usuario por identificación
router.get('/users/identificacion/:identificacion', async (req, res) => {
    try {
      const users = await user.findOne({ identificacion: req.params.identificacion });
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar un usuario por identificación
router.put('/users/identificacion/:identificacion', async (req, res) => {
    try {
        // Extrae los campos del cuerpo de la solicitud
        const { nombre, apellido, identificacion, correoElectronico } = req.body;  
        // Actualiza el usuario con la identificación proporcionada
        const users = await user.updateOne(
            // Filtro para identificar al usuario
            { identificacion: req.params.identificacion },
            { $set: { nombre, apellido, identificacion, correoElectronico }}, // Campos a actualizar
            { new: true } // Opción para devolver el documento actualizado
        );
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
          }
          res.json(users);
        } catch (error) {
          res.status(500).json({ message: error.message });
    }
});

// Ruta para eliminar un usuario por identificación
router.delete('/users/identificacion/:identificacion', async (req, res) => {
    try {
      const users = await user.deleteOne({ identificacion: req.params.identificacion });
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router;

