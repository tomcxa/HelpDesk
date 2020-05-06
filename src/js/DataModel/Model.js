/* eslint-disable class-methods-use-this */
import Event from './Event';

export default class DataModel {
    // static URL = "http://localhost:7070";
    constructor() {
        this.getAllTicketsEvent = new Event();
        this.addTicketEvent = new Event();
        this.updateTicketEvent = new Event();
        this.deleteTicketEvent = new Event();
        this.ticketStatusUpdateEvent = new Event();
    }
    // const ticket =
    //     {
    //         id: null,
    //         description: { short: 'Trali vali', full: 'Trali vali oborvali' },
    //         status: false,
    //         time: 223,
    //     };

    // let response = await fetch('http://localhost:7070/tickets', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(ticket)
    // });

    // const result = await response.json();

    // console.log(result)
    async getAllTickets() {
        const response = await fetch('http://localhost:7070/tickets', {
            method: 'GET',
        });

        const result = await response.json();
        this.getAllTicketsEvent.notify(result);
    }

    async getTicket(id) {
        const response = await fetch(`http://localhost:7070/tickets/:id?id=${id}`, {
            method: 'GET',
        });

        const result = await response.json();
        return result;
    }

    async addTicket(data) {
        const response = await fetch('http://localhost:7070/tickets', {
            method: 'POST',
            body: data,
        });
        const result = await response.json();
        this.addTicketEvent.notify(result);
    }

    async updateTicket(data) {
        const response = await fetch('http://localhost:7070/tickets', {
            method: 'PUT',
            body: data,
        });

        const result = await response.json();
        this.updateTicketEvent.notify(result);
    }

    async deleteTicket(id) {
        const response = await fetch(`http://localhost:7070/tickets/:id?id=${id}`, {
            method: 'DELETE',
        });

        const result = await response.text();
        this.deleteTicketEvent.notify(result);
    }

    async ticketStatusUpdate(id) {
        const response = await fetch(`http://localhost:7070/tickets/:id?id=${id}`, {
            method: 'PATCH',
        });

        const result = await response.text();
        this.ticketStatusUpdateEvent.notify(result);
    }
}
