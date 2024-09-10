const express = require('express');
const router = express.Router();
const user = require('../models/User'); 

//Ruta para crear un usuario
router.post('/users', async (req, res) => {
    try {
      const newUser = new user(req.body); // Crear una nueva instancia del modelo con los datos del cuerpo de la petición
      const savedUser = await newUser.save(); // Guardar el nuevo usuario en la base de datos
      res.status(201).json(savedUser); // Enviar el usuario guardado como respuesta
    } catch (error) {
      res.status(500).json({ message: error.message }); // Manejar cualquier error
    }
});

// Ruta para obtener todos los usuarios
router.get('/users', async (req, res) => {
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
