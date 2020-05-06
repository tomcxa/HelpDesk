/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import FormsView from './FormsView';

export default class AddTicketForm extends FormsView {
    constructor(container) {
        super(container);
        this.init();
    }

    _createFormHTML() {
        return `
        <div class="form-box">
            <form class="modal-form">
                <h2>Добавить тикет</h2>
                <input type="text" name="short" placeholder="Краткое описание">
                <textarea name="full" rows="3" placeholder="Подробное описание"></textarea>
                <div class="button-container">
                    <button class="button button-with-text danger" data-type-btn="cancle">Отменить</button>
                    <button class="button button-with-text" data-type-btn="save">Сохранить</button>        
                </div>
            </form>
        </div>`;
    }
}
