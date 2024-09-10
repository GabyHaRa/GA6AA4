const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
// El puerto es decision de cada usuario en este caso utilizo el puerto 9000
const port = process.env.PORT || 9000;
require("dotenv").config();
//Importar ruta de usuario 
const userRutes = require("./rutes/user");
const bibliotecaRutes = require("./rutes/biblioteca")
const calendarioRutes = require("./rutes/calendario")
const puntajeRutes = require("./rutes/puntaje")

app.listen(port,() =>  console.log('Servidor escuchando por el puerto : ',port));
app.use("/",userRutes);


//middleware
app.use(express.json())
app.use('/api',userRutes);

app.use(express.json())
app.use('/api',bibliotecaRutes);

app.use(express.json())
app.use('/api',calendarioRutes);

app.use(express.json())
app.use('/api',puntajeRutes);


app.get("/",(req,res) => {
    const {  } = req.params;
    res.send("API EN CONSTRUCCION")
})

//conexion base de datos
 //PASS=KL123456789 letra mayuscula.
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conexión establecida."))
.catch((error)=> console.log(error));

// server.js

/*const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Importa el modelo de usuario
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.post('/api/register', async (req, res) => {
    const { firstName, lastName, idNumber, email, username, password } = req.body;
    try {
        const newUser = new User({ firstName, lastName, idNumber, email, username, password });
        await newUser.save();
        res.status(201).send();
    } catch (err) {
        res.status(400).send('Error al registrar usuario');
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ $or: [{ email }, { username: email }] });
        if (user && user.password === password) {
            res.status(200).send();
        } else {
            res.status(401).send('Credenciales incorrectas');
        }
    } catch (err) {
        res.status(400).send('Error al iniciar sesión');
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});*/
