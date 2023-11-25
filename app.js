/*  Realizada por   Gustavo Oyarce P.
                    Nicolás Jara C.
                    Tomás Lillo S.
    Proyecto hosteado en fl0: https://niguto.4.us-1.fl0.io
*/
// Archivos y paquetes necesarios para la instalación
require("dotenv").config();
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");

const testRoutes = require('./routes/testRoutes');
const roomsRoutes = require('./routes/roomsRoutes');
const reserveRoutes = require('./routes/reserveRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const syncDatabase = require('./config/dbSync');
require('./config/auth');

//probando
const helmet = require("helmet");


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.helmet();

const PORT = process.env.PORT || 8080 || 3000;

app.use(cors());
app.use(express.json());

//* Aqui invocamos a las rutas! 
app.use('/v1/test', testRoutes);
app.use('/v1/rooms', roomsRoutes);
app.use('/v1/reserve', reserveRoutes);
app.use('/v1/user', userRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//* Llamando al metodo que conecta con la bd
syncDatabase();

module.exports = app;