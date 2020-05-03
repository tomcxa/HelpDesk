import MainView from './UI/MainView';
import AppController from './AppControls/AppController';

// eslint-disable-next-line no-console
console.log('it works!');

const view = new MainView();
view.init(document.body);
view.addTicket({
    description: { short: 'Поменять краску в принтере', full: 'Поменять краску в принтере' },
});

const controller = new AppController(view, null);
controller.init();
