/* eslint-disable no-underscore-dangle */

import TicketView from './TicketView';

/* eslint-disable class-methods-use-this */
export default class MainView {
    constructor() {
        this.element = document.createElement('section');
    }

    init(container) {
        this._renderMainHTML(container);
    }

    _createMainHTML() {
        return `
        <div class="button-container">
            <button class="button button-with-text" data-type-btn="add-ticket">Добавить тикет</button>
        </div>
        <div class="helpdesk-list">
        </div>`;
    }

    _renderMainHTML(container) {
        this.element.classList.add('helpdesk');
        this.element.innerHTML = this._createMainHTML();
        container.append(this.element);
    }

    _getTicketEl(id) {
        return this.element.querySelector(`[data-ticket-id="${id}"]`);
    }

    addTicket(ticketData) {
        const ticketEl = new TicketView(ticketData);
        ticketEl.bindToDOM(this.element.querySelector('.helpdesk-list'));
    }

    removeTicket(id) {
        const ticket = this._getTicketEl(id);
        ticket.remove();
    }

    editTicket(ticketData) {
        const ticketEl = this._getTicketEl(ticketData.id);
        ticketEl.outerHTML = TicketView.createTicketHTML(ticketData);
    }

    addListener(listener) {
        this.element.addEventListener('click', listener);
    }

    confirmToggle(id) {
        const ticketEl = this._getTicketEl(id);
        const btn = ticketEl.querySelector('[data-type-btn="confirm"]');
        btn.classList.toggle('completed');
        ticketEl.classList.toggle('completed');
    }

    showFullDescription(target) {
        const fullDescription = target.querySelector('[data-name="full-description"]');
        fullDescription.classList.toggle('hidden');
    }
}
