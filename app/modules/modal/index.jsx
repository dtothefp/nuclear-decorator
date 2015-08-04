import reactor from '../reactor';
import * as Actions from './modal-actions';
import * as Getters from './modal-getters';
import { isOpenStore as modalIsOpen } from './modal-stores.js';

reactor.registerStores({ modalIsOpen });

export default { Actions, Getters };
