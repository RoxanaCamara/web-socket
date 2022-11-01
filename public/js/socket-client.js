const offline = document.getElementById('offline')
const online = document.getElementById('online')

const textMensaje = document.getElementById('textMensaje')
const btnEnviar = document.getElementById('btnEnviar') 



const socket = io()

socket.on("connect", () => {
    console.log('Cliente conectado Front', socket.id)  
    offline.style.display= 'none'
    online.style.display= ''  
})

socket.on("disconnect", () => {
    console.log('Cliente desconectado Front')  
    online.style.display= 'none'
    offline.style.display= '' 
})


socket.on('enviar-mensaje', payload => {
    console.log(payload) 
})  

btnEnviar.addEventListener( 'click', () => {
    const mensaje = textMensaje.value;
    const payload = {
        msg: mensaje,
        id: socket.id
    }
    socket.emit( 'enviar-mensaje', payload, (id)=> {
        console.log(`Cliente ${id} ha enviando un mensaje, Front`) 
    }  )
})