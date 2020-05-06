/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import FormsView from './FormsView';

export default class ConfirmModal extends FormsView {
    constructor(container, ticketId) {
        super(container);
        this._ticketId = ticketId;
        this.init();
    }

    get id() {
        return this._ticketId;
    }

    _createFormHTML() {
        return `
        <div class="form-box">
            <form class="modal-form">
                <h2>Подтвердите действие</h2>
                <div class="button-container">
                    <button class="button button-with-text danger" data-type-btn="cancle">Отменить</button>
                    <button class="button button-with-text" data-type-btn="save">Подтвердить</button>        
                </div>
            </form>
        </div>`;
    }
}
