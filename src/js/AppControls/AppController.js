import FormsView from "../UI/FormsView";

export default class AppController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.addListener(this.ticketHandler.bind(this));
    }

    ticketHandler(event) {
        event.preventDefault();
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
            console.log(typeBtn)
            this.form = new FormsView(event.currentTarget, null);
            this.form.addListener(this.formHandler.bind(this));
            // btn.blur();
        }
        if (typeBtn === 'confirm') {
            const ticketCard = event.target.closest('.helpdesk-list_item');
            this.view.confirmToggle(btn, ticketCard);
            btn.blur();
        }
        if (typeBtn === 'edit') {
            console.log(typeBtn)
            // btn.blur();
        }
        if (typeBtn === 'delete') {
            console.log(typeBtn)
            // btn.blur();
        }
    }

    formHandler(event) {
        event.preventDefault();

        const btn = event.target.closest('[data-type-btn]');
        const { typeBtn } = btn ? btn.dataset : Object.create(null);

        if (typeBtn === 'cancle') {
            this.form.destroy();
        }

        if (typeBtn === 'save') {
            console.log( this.form.formData);
        }
    }
}
