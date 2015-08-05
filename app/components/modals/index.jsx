import React from 'react';
import makeModal from './modal';
import {Actions} from '../../modules/modal';
import { provideReactor } from 'nuclear-js-react-addons';

@provideReactor
export default class Modals extends React.Component {
  static propTypes = {
    modalIds: React.PropTypes.array.isRequired
  };

  handleClick = (id, e) => {
    e.preventDefault();
    Actions.openModal({id});
  }

  render() {
    let modals = this.props.modalIds.map((id, i) => {
      let Modal = makeModal(id);
      return [
        <button onClick={this.handleClick.bind(this, id)}>Open {id} Modal</button>,
        <Modal key={i} />
      ];
    });
    return (
      <div className="modals-wrapper">
        {modals}
      </div>
    );
  }
}
