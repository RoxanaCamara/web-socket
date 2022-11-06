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
    const audio = new Audio('../audio/new-ticket.mp3')
    audio.play()
    const [ ticket1, ticket2, ticket3, ticket4 ] = payload
    textParaCadaPantalla( 
        siEstaDesocupado(ticket1),
        siEstaDesocupado(ticket2),
        siEstaDesocupado(ticket3),
        siEstaDesocupado(ticket4))
})

const siEstaDesocupado = ( ticket ) => {
    return ticket ? {...ticket, numero:  'Ticket ' + ticket.numero } : { numero: 'No disponible' , escritorio: 'No disponible' }
}

const textParaCadaPantalla = ( ticket1, ticket2, ticket3, ticket4,) => {
    
    lblTicket1.innerHTML= ticket1.numero 
    lblEscritorio1.innerHTML=  ticket1.escritorio


    lblTicket2.innerHTML= ticket2.numero 
    lblEscritorio2.innerHTML=  ticket2.escritorio


    lblTicket3.innerHTML= ticket3.numero 
    lblEscritorio3.innerHTML= ticket3.escritorio


    lblTicket4.innerHTML= ticket4.numero 
    lblEscritorio4.innerHTML=  ticket4.escritorio
}