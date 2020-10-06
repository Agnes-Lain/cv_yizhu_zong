import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../stylesheets/application.scss';
import { initMenu } from './init_menu';
import { initExpModal } from './init_exp_modal';
import { initProjectInfo } from './init_project_info';

initMenu();
initExpModal();
initProjectInfo();
