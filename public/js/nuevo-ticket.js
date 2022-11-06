

console.log('Nuevo Ticket HTML');

const lblNuevoTicket = document.getElementById('lblNuevoTicket')
const generarNuevoTicket = document.getElementById('generarNuevoTicket')

const socket = io()

socket.on("connect", () => {
    generarNuevoTicket.disabled= true
})

socket.on("ultimo-ticket", (ticket) => {
    lblNuevoTicket.innerText = 'Ticket '+ ticket
})

socket.on("disconnect", () => {
    //generarNuevoTicket.disabled= true 
})
 
generarNuevoTicket.addEventListener( 'click', () => {
    socket.emit( 'siguiente-ticket', null, (ticket)=> {
        lblNuevoTicket.innerText = 'Ticket ' + ticket
    })
})