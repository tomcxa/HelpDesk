/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class TicketView {
    constructor(ticketData) {
        this.ticketData = ticketData;
    }

    _createTicketHTML() {
        // const status = this.ticketData.status ? 'completed'
        return `
        <a href="#" class="helpdesk-list_item" data-id="${this.ticketData.id}">
            <button class="button-ico button" data-type-btn="confirm">
            </button>
            <div class="description">
                <p data-name="short-description">${this.ticketData.description.short}</p>
                <p data-name="full-description" class="hidden">${this.ticketData.description.full}</p>
            </div>
            <time datetime="${this.ticketData.time}">${this.ticketData.time
                || new Date().toLocaleString()}</time>
            <div class="helpdesk-list_item-controll">
                <button class="button-ico button edit" data-type-btn="edit">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <button class="button button-ico danger" data-type-btn="delete">
                    <span class="custom-ico remove"></span>
                </button>
            </div>
        </a>`;
    }

    bindToDOM(container) {
        container.insertAdjacentHTML('afterbegin', this._createTicketHTML());
    }
}
