const offline = document.getElementById('offline')
const online = document.getElementById('online')

const textMensaje = document.getElementById('textMensaje')
const btnEnviar = document.getElementById('btnEnviar') 



const socket = io()

socket.on("connect", () => {
    console.log('Cliente conectado', socket.id)  
    offline.style.display= 'none'
    online.style.display= ''  
})

socket.on("disconnect", () => {
    console.log('Cliente desconectado')  
    online.style.display= 'none'
    offline.style.display= '' 
})


btnEnviar.addEventListener( 'click', payload, (id) => {
    //const mensaje = textMensaje.value;
    //console.log(mensaje)
    //socket.emit( 'enviar-mensaje', mensaje)
    console.log(`Cliente ${id} ha enviando un mensaje`) 
})