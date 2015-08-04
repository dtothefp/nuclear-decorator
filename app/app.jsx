import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';

import React from 'react';
import Modal from './components/modal';
import reactor from './modules/reactor';
import querystring from 'qs';
import Cookie from 'js-cookie';
import {Actions} from './modules/modal';

if (Cookie.get('homeLightbox') === undefined && window.location.pathname === '/'){
  Actions.openModal();
  Cookie.set('homeLightbox', 'true', { expires: 7 });
}
else if (querystring.parse(window.location.search.replace('?', '')).p === 't'){
  Actions.openModal();
}

React.render(
  <Modal reactor={reactor} />,
  document.getElementById('app')
);
