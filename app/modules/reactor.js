import { Reactor } from 'nuclear-js';

const reactor = new Reactor({
  debug: !process.env.NODE_ENV || process.env.NODE_ENV !== 'production'
});

export default reactor;
