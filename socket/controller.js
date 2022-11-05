const TicketControl = require('../models/ticketControl')
const ticketControl = new TicketControl()

const socketController = (socket) => {
    
    socket.on('enviar-mensaje', (payload, callback) => {
        callback(socket.id)
        /*Envia lo que contenga ese obj payload a todos los clientes conectados, excepto a quien lo envio */
        socket.broadcast.emit('enviar-mensaje', payload)
    })

    socket.on("disconnect", () => {
    })
}

module.exports = {
    socketController
}