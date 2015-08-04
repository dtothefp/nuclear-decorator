import querystring from 'qs';
import styles from './styles.scss';
import Cookie from 'js-cookie';
import _ from 'lodash';
import React from 'react';
import { nuclearComponent, provideReactor } from 'nuclear-js-react-addons';
import cx from 'classnames';
import {Actions, Getters} from '../../modules/modal';
import RIT from '../../utils/render-if-truthy';
import Header from './header';
import Content from './content';
import Footer from './footer';

@provideReactor
@nuclearComponent({
  isOpen: Getters.isOpen
})

export default class Modal extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  };

  static defaultProps = {
    Header: false,
    Content: false,
    className: 'modal',
    closeButton: true,
    showButtons: true,
    customButtons: [],
    footer: false,
    position: 'centered' // valid values are 'top' and 'centered'
  };

  componentDidMount() {
    var data = _.merge(
      {},
      _.omit(this.props, 'data'),
      this.props.data
    );

    if (Cookie.get('homeLightbox') === undefined && window.location.pathname === '/'){
      Actions.openModal(this.props);
      Cookie.set('homeLightbox', 'true', { expires: 7 });
    }
    else if (querystring.parse(window.location.search.replace('?', '')).p === 't'){
      Actions.openModal(this.props);
    }
  }

  handleClick(type, e) {
    e.preventDefault();
    switch(type) {
      case 'open':
        Actions.openModal(this.props);
        break;
      case 'close':
        Actions.closeModal(this.props);
        break;
    }
  }

  render() {
    var {closeButton, Header, Content, footer, id} = this.props;
    let footerData = {};
    let classO = {};

    classO[styles.modal] = true;
    classO[styles['modal-show']] = this.props.isOpen;

    let classes = cx(classO);

    return (
      <div>
        <button onClick={this.handleClick.bind(this, 'open')}>Show Modal</button>
        <div className={classes} id={id}>
          <div className="modal-wrapper" onClick={this.handleClick.bind(this, 'close')}>
            {RIT(closeButton, (closeButton) => {
              return (
                <a href="#close" className="modal-close" title="Dismiss">
                <span className="sr-only">Close</span>
                <i className="icon icon-times"></i>
                </a>
              );
            })}
            {RIT(Header, Header => <Header />)}
            {RIT(Content, Content => <Content />)}
            {RIT(footer, (footer) => {
              return <Footer data={footerData} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
