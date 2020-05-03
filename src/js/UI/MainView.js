/* eslint-disable no-underscore-dangle */

import TicketView from './TicketView';

/* eslint-disable class-methods-use-this */
export default class MainView {
    constructor() {
        this.element = document.createElement('section');
    }

    init(container) {
        this.renderMainHTML(container);
    }

    _createMainHTML() {
        return `
        <div class="button-container">
            <button class="button button-with-text" data-type-btn="add-ticket">Добавить тикет</button>
        </div>
        <div class="helpdesk-list">
        </div>`;
    }

    renderMainHTML(container) {
        this.element.classList.add('helpdesk');
        this.element.innerHTML = this._createMainHTML();
        container.append(this.element);
    }

    addTicket(ticketData) {
        const ticket = new TicketView(ticketData);
        ticket.bindToDOM(this.element.querySelector('.helpdesk-list'));
    }

    addListener(listener) {
        this.element.addEventListener('click', listener);
    }

    confirmToggle(btn, target) {
        btn.classList.toggle('confirmed');
        target.classList.toggle('completed');
    }

    showFullDescription(target) {
        const fullDescription = target.querySelector('[data-name="full-description"]');
        // if (target.dataset && target.dataset.name === 'full-description') {
        //     fullDescription.classList.toggle('hidden');
        // }
        fullDescription.classList.toggle('hidden');
    }
}
