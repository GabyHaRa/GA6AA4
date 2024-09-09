/*const express = require('express');
const router = express.Router();
const userSchema = require("../models/user");

// crear usuario 
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Obtener todos los usuarios 
router.get('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Mostrar usuario especifico
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .finById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Actualizar usuario 
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, identificacion, correoElectronico } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, apellido, identificacion, correoElectronico } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Eliminar usuario
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router*/
const express = require('express');
const router = express.Router();
const user = require('../models/User'); 

//Ruta para crear un usuario
/*suario en la base de datos
      const user = await newUser.save();
      // Envía una respuesta con el usuario creado
      res.status(201).json(user);
    } catch (error) {
      // Envía un mensaje de error si algo sale mal
      res.status(500).json({ message: error.message });
    }
  });*/
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
/*router.put('/users/identificacion/:identificacion', async (req, res) => {
    try {
      const users = await user.findOneAndUpdate(
        { identificacion: req.params.identificacion },
        //{ nombre, apellido, identificacion, correoElectronico },
        { new: true } // Devuelve el documento actualizado
      );
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
});*/
/*router.put('/users/identificacion/:identificacion', async (req, res) => {
    try {
        const users = await user.updateOne({ identificacion: req.params.identificacion }, 
            { $set: { nombre, apellido, identificacion, correoElectronico }} = req.body, 
            { new: true } // Devuelve el documento actualizado
        );
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(users);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/
router.put('/users/identificacion/:identificacion', async (req, res) => {
    try {
        // Extrae los campos del cuerpo de la solicitud
        const { nombre, apellido, identificacion, correoElectronico } = req.body;  
        // Actualiza el usuario con la identificación proporcionada
        const users = await user.updateOne(
            { identificacion: req.params.identificacion }, // Filtro para identificar al usuario
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
      const user = await user.deleteOne({ identificacion: req.params.identificacion });
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
