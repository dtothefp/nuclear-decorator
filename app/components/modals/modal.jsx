import React from 'react';
import { nuclearComponent } from 'nuclear-js-react-addons';
import cx from 'classnames';
import {Actions, Getters} from '../../modules/modal';
import RIT from '../../utils/render-if-truthy';
import Header from './header';
import Content from './content';
import Footer from './footer';
import styles from './styles.scss';


export default class Modal extends React.Component {
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

  handleClick = (type, e) => {
    let t = typeof type;
    if(t === 'object') {
      e = type;
    } else if(t === 'string' ) {
      switch(type) {
        case 'open':
          Actions.openModal({id: this.props.modalId});
          break;
        case 'close':
          Actions.closeModal({id: this.props.modalId});
          break;
      }
    }
    e.preventDefault();
  }

  render() {
    var {closeButton, Header, Content, footer, id} = this.props;
    let footerData = {};
    let classO = {};

    classO[styles.modal] = true;
    classO[styles['modal-show']] = this.props.isActive;
    classO[styles[`modal-${this.props.modalId}`]] = true;

    let classes = cx(classO);

    return (
      <div>
        <div className={classes}>
          <div className="modal-wrapper">
            {RIT(closeButton, (closeButton) => {
              return (
                <a href="#close" className="modal-close" title="Dismiss" onClick={this.handleClick.bind(this, 'close')} >
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
