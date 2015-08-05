import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';

import React from 'react';
import Modals from './components/modals';
import reactor from './modules/reactor';
import querystring from 'qs';
import {Actions} from './modules/modal';

const homeModalId = 'home-lightbox';
let params = querystring.parse(window.location.search.replace('?', ''));
let keys = Object.keys(params);

if(keys.length) {
  keys.forEach((key) => {
    if(params[key]) {
      Actions.openModal({id: key});
    }
  });
}

React.render(
  <Modals reactor={reactor} modalIds={keys} />,
  document.getElementById('app')
);
