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
ultimoTicket.innerText= 'msg1'

socket.on("cola-tickets", (ticket) => {
    console.log("🚀 ~ file: escritorio.js ~ line 24 ~ socket.on ~ ticket", ticket)
    lblPendientes.innerText= ''+ ticket
})

/*socket.on("ultimo-ticket-atendido", (ticket) => {
    lblPendientes.innerText= 'Ticket '+ ticket
})*/
 
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
   
})
