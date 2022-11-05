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