const express = require('express');
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


module.exports = router

