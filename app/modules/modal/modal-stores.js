import { Store, toImmutable } from 'nuclear-js';
import {OPEN, CLOSE} from './modal-constants';

export const isOpenStore = Store({
  getInitialState() {
    return false;
  },

  initialize() {
    // Sets isOpen to true
    this.on(OPEN, (state, {id}) => {
      let newState;
      if(!state) {
        newState = toImmutable({id: [id]});
      } else if(!state.get('id').filter((i) => id === i ).size) {
        newState = toImmutable({id: state.get('id').push(id)});
      } else {
        newState = state;
      }
      return newState;
    });

    // Reverts to initial state
    this.on(CLOSE, (state, {id}) => {
      state = state.toJS();
      let i = state.id.indexOf(id);
      state.id.splice(i, 1);

      return toImmutable(state);
    });
  }
});
