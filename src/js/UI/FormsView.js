/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class FormsView {
    constructor(container) {
        this.container = container;
    }

    init() {
        this.bindToDOM();
        this.addListener();
    }

    _createFormHTML() {
        throw new Error('Add html to instance');
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
        const formData = new FormData(formEl);
        return formData;
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
