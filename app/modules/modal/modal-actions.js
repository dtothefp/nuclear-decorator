import reactor from '../reactor';
import {OPEN, CLOSE} from './modal-constants';

export const openModal = function openModal(data) {
  reactor.dispatch(OPEN, data);
};

export const closeModal = function closeModal() {
  reactor.dispatch(CLOSE, {});
};
