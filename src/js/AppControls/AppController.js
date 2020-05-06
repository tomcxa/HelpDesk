/* eslint-disable class-methods-use-this */
import ConfirmModal from '../UI/ConfirmModal';
import AddTicketForm from '../UI/AddTicketForm';
import EditTicketForm from '../UI/EditTicketForm';
import { isValidForm } from '../helpers/validForms';

export default class AppController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.addListener(this.ticketHandler.bind(this));

        this.model.getAllTicketsEvent.attach(this.syncWithServer.bind(this));
        this.model.addTicketEvent.attach(this.addTicket.bind(this));
        this.model.updateTicketEvent.attach(this.editTicket.bind(this));
        this.model.deleteTicketEvent.attach(this.removeTicket.bind(this));
        this.model.ticketStatusUpdateEvent.attach(this.ticketStatusUpdate.bind(this));

        this.model.getAllTickets();
    }

    syncWithServer(tickets) {
        tickets.forEach((ticket) => {
            this.addTicket(ticket);
        });
    }

    async ticketHandler(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const isShowDescription = event.target.dataset.name === 'short-description'
            || event.target.datetime;

        if (isShowDescription) {
            const ticketCard = event.target.closest('.helpdesk-list_item');
            this.view.showFullDescription(ticketCard);
            return;
        }
        const btn = event.target.closest('[data-type-btn]');
        const { typeBtn } = btn ? btn.dataset : Object.create(null);
        if (typeBtn === 'add-ticket') {
            console.log(typeBtn);
            this.form = new AddTicketForm(currentTarget);
            this.form.addListener(this.formAddHandler.bind(this));
            // btn.blur();
        }
        if (typeBtn === 'confirm') {
            const ticketCard = event.target.closest('[data-ticket-id]');
            const { ticketId } = ticketCard.dataset;
            console.log(ticketId);
            this.model.ticketStatusUpdate(ticketId);
            btn.blur();
        }
        if (typeBtn === 'edit') {
            const ticketCard = event.target.closest('[data-ticket-id]');
            const { ticketId } = ticketCard.dataset;
            const data = await this.model.getTicket(ticketId);
            this.form = new EditTicketForm(currentTarget, data);
            this.form.addListener(this.formEditHandler.bind(this));
            // btn.blur();
        }
        if (typeBtn === 'delete') {
            console.log(typeBtn);
            const ticketCard = event.target.closest('[data-ticket-id]');
            const { ticketId } = ticketCard.dataset;
            this.form = new ConfirmModal(currentTarget, ticketId);

            this.form.addListener(this.formConfirmHandler.bind(this));
            // btn.blur();
        }
    }

    async formAddHandler(event) {
        event.preventDefault();

        const typeBtn = this.getBtnType(event.target);

        if (typeBtn === 'cancle') {
            this.destroyForm();
        }

        if (typeBtn === 'save') {
            const data = this.form.formData;
            await this.model.addTicket(data);
            this.destroyForm();
        }
    }

    async formEditHandler(event) {
        event.preventDefault();

        const typeBtn = this.getBtnType(event.target);

        if (typeBtn === 'cancle') {
            this.destroyForm();
        }

        if (typeBtn === 'save') {
            const data = this.form.formData;
            const { id } = this.form.data;
            console.log(id);
            data.append('id', id);
            await this.model.updateTicket(data);
            this.destroyForm();
        }
    }

    async formConfirmHandler(event) {
        event.preventDefault();

        const typeBtn = this.getBtnType(event.target);

        if (typeBtn === 'cancle') {
            this.destroyForm();
        }

        if (typeBtn === 'save') {
            await this.model.deleteTicket(this.form.id);
            this.destroyForm();
        }
    }

    // getTicketId(target) {
    //     const ticket = target.querySelector('.helpdesk-list_item');
    //     console.log(ticket);
    //     const { ticketId } = ticket.dataset;

    //     return ticketId;
    // }

    getBtnType(target) {
        const btn = target.closest('[data-type-btn]');
        const { typeBtn } = btn ? btn.dataset : Object.create(null);
        return typeBtn;
    }

    addTicket(data) {
        this.view.addTicket(data);
    }

    editTicket(data) {
        console.log(data);
        this.view.editTicket(data);
    }

    ticketStatusUpdate(id) {
        this.view.confirmToggle(id);
    }

    removeTicket(id) {
        this.view.removeTicket(id);
    }

    destroyForm() {
        if (this.form) {
            this.form.destroy();
            this.form = null;
        }
    }
}
