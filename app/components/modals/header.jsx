import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div className="modal-header">
        <a href="#close" className="modal-close left">
          <i className="icon icon-times"></i>
        </a>
        <a href="#close" className="modal-close" title="Dismiss">
          <span>continue to hillaryclinton.com</span>
          <img src="https://a.hrc.onl/img/mark-h.svg" alt="Continue to HillaryClinton.com" />
        </a>
        <h1 className="lightbox-heading">This starts with you.</h1>
      </div>
    );
  }
}

