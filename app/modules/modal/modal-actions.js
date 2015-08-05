import reactor from '../reactor';
import {OPEN, CLOSE} from './modal-constants';

export const openModal = function openModal(id) {
  reactor.dispatch(OPEN, id);
};

export const closeModal = function closeModal(id) {
  reactor.dispatch(CLOSE, id);
};
