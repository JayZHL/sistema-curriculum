const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const router=require('./routes/index');//para las rutas
const cors = require("cors");

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);//Se usa el router

const port = 4000;

app.listen(port, () => {

    console.log('Servidor escuchando por el puerto:',port);
}).on('error', err => {
    console.log('Error al inciar el servidor:',err);
});