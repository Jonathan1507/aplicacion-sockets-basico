const { io } = require('../server')

// Aqui tenemos la informacion de una conexion
// cliente tiene toda la informacion de la pc o de la conección que se establecio
io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la Aplicación'
    });

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    // Escuchar al cliente(frontend)
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // broadcast manda el mensaje a todos los usuarios del servidor
        cliente.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'TODO SALIO BIEN!!!'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'TODO SALIO MAL!!!!!!'
        //     });
        // }

    });
});