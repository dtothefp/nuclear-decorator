import { Store, toImmutable } from 'nuclear-js';
import {OPEN, CLOSE} from './modal-constants';

export const isOpenStore = Store({
  getInitialState() {
    return false;
  },

  initialize() {
    // Sets isOpen to true
    this.on(OPEN, () => true);

    // Reverts to initial state
    this.on(CLOSE, () => false);
  }
});
