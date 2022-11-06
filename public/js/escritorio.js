console.log('Escritorio HTML');

const searchParams = new URLSearchParams( window.location.search)

if(!searchParams.has('escritorio')){
    window.location= 'index.html'
    throw new Error('El escritorio es obligatorio')
}
const escritorio = searchParams.get('escritorio')
document.getElementById('titulo').innerHTML= escritorio

const ultimoTicket = document.getElementById('ultimoTicket')
const BtnAtenderTicket = document.getElementById('BtnAtenderTicket')
const alert = document.getElementById('alert')
const lblPendientes = document.getElementById('lblPendientes')

const socket = io()
alert.style.display = 'none';
ultimoTicket.innerText= '---'

socket.on("cola-tickets", (ticket) => {
    lblPendientes.innerText=  ticket
})


BtnAtenderTicket.addEventListener( 'click', () => {
    socket.emit( 'atender-ticket', ({escritorio}), ({ ok, msg, ticket })=> {
        
        if(!ok){
            ultimoTicket.innerText= msg
            alert.style.display = ''
            return
        }else{
            ultimoTicket.innerText = 'Ticket ' + ticket
        }
    }
) 
    console.log("🚀 ~ file: escritorio.js ~ line 41 ~ socket.emit ~  ok, msg, ticket",  ok, msg, ticket)
})
