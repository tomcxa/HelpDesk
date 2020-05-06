import MainView from './UI/MainView';
import AppController from './AppControls/AppController';
import DataModel from './DataModel/Model';

// eslint-disable-next-line no-console
console.log('it works!');

const view = new MainView();
view.init(document.body);
const model = new DataModel();
const controller = new AppController(view, model);
controller.init();
