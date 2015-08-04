import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';

import React from 'react';
import App from './components/App';
import reactor from './modules/reactor';

React.render(
  <App reactor={reactor} />,
  document.getElementById('app')
);
