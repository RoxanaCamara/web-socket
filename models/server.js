const express = require('express');
const cors = require('cors');
const { socketController } = require('../socket/controller');

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000
        this.path = {}
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.io.on('connection', () => { /* … */ });

        //Middelwares
        this.middelwares()

        //Routes in app
        this.routes()

        //sockets
        this.sockets()
    }

    middelwares(){
        //CORS
        this.app.use( cors()) ;

        //Read and parse the body
        this.app.use(express.json())

        //public path
        this.app.use( express.static('public'));

        //sockets
        this.app.use( express.static('public'));
        
    }

    routes(){

    }

    sockets(){
        this.io.on("connection", socketController);
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('Servidos Runninn in port', this.port)
        })
    }

}

module.exports = Server;
