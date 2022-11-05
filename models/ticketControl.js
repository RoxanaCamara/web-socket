const path = require('path')
const fs = require('fs')

class Ticket {
    constructor(numero, escritorio){
        this.numero=numero
        this.escritorio=escritorio
    }
}


class TicketControl {
    
    constructor(){
        this.ultimo= 0;
        this.hoy= new Date().getDate();
        this.tickets=[];
        this.ultimos4=[];
        this.init()
    }
    init () {
        const { hoy, ultimos4, ultimo, tickets } = require('../data.json')
        console.log(data)
        if( hoy == this.hoy){
            this.ultimo= hoy;
            this.tickets= tickets;
            this.ultimos4= ultimos4;
        }
    }

    guardarDB(){
        const dbpath = path.join(__dirname, '../data.json')
        fs.writeFileSync(dbpath, JSON.stringify(this.toJson()))
    }

    siguiente(){
        this.ultimo+=1
        const ticket =  new Ticket(this.ultimo, null)
        this.tickets.push(ticket)
        this.guardarDB()
        return ticket.numero
    }

    atenderTicket( escritorio ){
        if(this.tickets.length == 0){
            return null
        }
        const ticket = this.tickets.unshift()
        ticket.escritorio= escritorio
        this.ultimos4.unshift(ticket)
        if( this.ultimos4.length > 4){
            this.ultimos4.splice(-1,1)
        }
        this.guardarDB()
        return ticket
    }

    get toJson() {
        return {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        }

    }
}

module.exports = TicketControl