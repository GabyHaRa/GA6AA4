const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
// El puerto es decision de cada usuario en este caso utilizo el puerto 8000
const port = process.env.PORT || 8000;
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


//app.get("/",(req,res) => {
//    const {  } = req.params;
//    res.send("API EN CONSTRUCCION")
//})

//conexion base de datos
// PASS=KL123456789 letra mayuscula.
mongoose.connect(process.env.BDMONGO_URI)
.then(() => console.log("Conexión establecida."))
.catch((error)=> console.log(error));