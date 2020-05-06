/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class TicketView {
    constructor(ticketData) {
        this.ticketData = ticketData;
    }

    static createTicketHTML(ticketData) {
        console.log(ticketData);
        const completed = ticketData.status ? ' completed' : '';
        return `
        <a href="#" class="helpdesk-list_item${completed}" data-ticket-id="${ticketData.id}">
            <button class="button-ico button${completed}" data-type-btn="confirm">
            </button>
            <div class="description">
                <p data-name="short-description">${ticketData.short}</p>
                <p data-name="full-description" class="hidden">${ticketData.full}</p>
            </div>
            <time datetime="${ticketData.time}">${ticketData.time}</time>
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
        container.insertAdjacentHTML('afterbegin', TicketView.createTicketHTML(this.ticketData));
    }
}
