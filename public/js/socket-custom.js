var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor')
});

// Codigo para cuando pedemos la conexion con el servidor
// on => para escuchar sucesos
socket.on('disconnect', function () {
    console.log('Perdimos la conexion con el servidor');
});

// Comunicacion entre frontend(cliente) hacia el backend(server)
// emit => para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jonathan',
    mensaje: 'Hola Mundo'
}, function (respuesta) {
    console.log('Respuesta de Servidor: ', respuesta)
});

// Escuchar Información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje)
})