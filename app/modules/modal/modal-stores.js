import { Store, toImmutable } from 'nuclear-js';
import {OPEN, CLOSE} from './modal-constants';

export const isOpenStore = Store({
  getInitialState() {
    return toImmutable({}); // You want to keep the same data type throughout
  },

  initialize() {
    // Creates a mapping of modalId => open state
    // Example: isOpenStore { 'home-modal': true, 'other-modal': false, ... }
    this.on(OPEN, (state, { id }) => state.set(id, true));

    // Updates the open state for a modalId key.
    this.on(CLOSE, (state, { id }) => {
      if (!state.has(id)) return state;

      return state.set(id, false);
    });
  }
});
