const express = require('express');
const socketIO = require('socket.io');
const http = require('http')

const path = require('path');

const app = express();

// Definimos el servidor para que corra la aplicación
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializamos el SocketIO
// IO = Esta es la comunicación del backend
module.exports.io = socketIO(server);
//Importamos el archivo socket.js para que lo pueda leer
require('./sockets/socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});