
const socketController = (socket) => {
    
    socket.on('enviar-mensaje', (payload, callback) => {
        callback(socket.id)
        socket.broadcast.emit('enviar-mensaje', payload)
    })

    socket.on("disconnect", () => {
    })
}

module.exports = {
    socketController
}