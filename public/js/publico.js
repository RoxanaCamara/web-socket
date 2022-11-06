console.log('Público HTML')
const lblTicket1 = document.getElementById('lblTicket1')
const lblTicket2 = document.getElementById('lblTicket2')
const lblTicket3 = document.getElementById('lblTicket3')
const lblTicket4 = document.getElementById('lblTicket4')


const lblEscritorio1 = document.getElementById('lblEscritorio1')
const lblEscritorio2 = document.getElementById('lblEscritorio2')
const lblEscritorio3 = document.getElementById('lblEscritorio3')
const lblEscritorio4 = document.getElementById('lblEscritorio4')

const socket = io()

socket.on("estado-actual", (payload) => {
    console.log("🚀 ~ file: publico.js ~ line 10 ~ socket.on ~ payload", payload)
    const [ ticket1, ticket2, ticket3, ticket4 ] = payload

    lblTicket1.innerHTML= 'Ticket ' + ticket1.numero 
    lblEscritorio1.innerHTML=  ticket1.escritorio


    lblTicket2.innerHTML= 'Ticket ' + ticket2.numero 
    lblEscritorio2.innerHTML=  ticket2.escritorio


    lblTicket3.innerHTML= 'Ticket ' + ticket3.numero 
    lblEscritorio3.innerHTML= ticket3.escritorio


    lblTicket4.innerHTML= 'Ticket ' + ticket4.numero 
    lblEscritorio4.innerHTML=  ticket4.escritorio
})
