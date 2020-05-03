/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class FormsView {
    constructor(container, type) {
        this.container = container;
        this.type = type;

        this.init();
    }

    init() {
        this.bindToDOM();

        // this.handler = this.formHandler.bind(this);
        this.addListener();
    }

    _createFormHTML() {
        return `
        <div class="form-box">
            <form class="modal-form">
                <h2>Добавить тикет</h2>
                <input type="text" name="short-description" placeholder="Краткое описание">
                <textarea name="full-description" rows="3" placeholder="Подробное описание"></textarea>
                <div class="button-container">
                    <button class="button button-with-text danger" data-type-btn="cancle">Отменить</button>
                    <button class="button button-with-text" data-type-btn="save">Сохранить</button>        
                </div>
            </form>
        </div>`;
    }

    bindToDOM() {
        if (this.container) {
            this.container.insertAdjacentHTML('beforeend', this._createFormHTML());
        }
    }

    get formBoxEl() {
        return this.container.querySelector('.form-box');
    }

    get formData() {
        const formEl = this.formBoxEl.querySelector('.modal-form');
        const short = formEl.elements[0].value;
        const full = formEl.elements[1].value;
        return [short, full];
    }

    destroy() {
        this.removeListener();
        this.formBoxEl.remove();
    }

    addListener(handler) {
        this.handler = handler;
        this.formBoxEl.addEventListener('click', this.handler);
    }

    removeListener() {
        this.formBoxEl.removeEventListener('click', this.handler);
    }
}
