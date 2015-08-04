import { Reactor } from 'nuclear-js';

const reactor = new Reactor({
  debug: process.env.NODE_ENV
});

export default reactor;
