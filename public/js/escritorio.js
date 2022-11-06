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
const socket = io()

 
BtnAtenderTicket.addEventListener( 'click', () => {})
    socket.emit( 'atender-ticket', {escritorio}, ({ ok, msg, ticket })=> {
        if(!ok){
            ultimoTicket.innerHTML= msg
            alert.display= ''
             return
        }else{
            ultimoTicket.innerText = 'Ticket ' + ticket
        }
    }
)