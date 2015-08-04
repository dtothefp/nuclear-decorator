import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';

import React from 'react';
import Modal from './components/modal';
import reactor from './modules/reactor';

React.render(
  <Modal reactor={reactor} />,
  document.getElementById('app')
);
