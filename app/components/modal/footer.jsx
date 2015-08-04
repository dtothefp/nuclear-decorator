import React from 'react';
import RIT from '../../utils/render-if-truthy';

export default class Footer extends React.Component {
  render() {
    const {cancelButton, confirmButton, cancelButtonLink, cancelButtonText, confirmButtonText, confirmButtonLink} = this.props.data;

    return (
      <footer className="modal-footer">
      {RIT(cancelButton, (cancelButton) => {
          return (<a href={cancelButtonLink} title={cancelButtonText} className="btn btn-cancel modal-cancel">{{ cancelButtonText }}</a>);
      })}
      {RIT(
        confirmButton,
        (confirmButton) => {
          return (<a href={confirmButtonLink} title={confirmButtonText} className="btn btn-primary modal-confirm">{{ confirmButtonText }}</a>);
      })}
      </footer>
    );
  }
}
