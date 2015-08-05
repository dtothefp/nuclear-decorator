import React from 'react';
import Modal from './modal';
import {Actions, Getters} from '../../modules/modal';
import { provideReactor, nuclearComponent } from 'nuclear-js-react-addons';

@provideReactor
@nuclearComponent({
  openModals: Getters.openModalIds
})
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
      let isActive = this.props.openModals.indexOf(id) !== -1;
      return [
        <button onClick={this.handleClick.bind(this, id)}>Open {id} Modal</button>,
        <Modal key={i} modalId={id} isActive={isActive}/>
      ];
    });
    return (
      <div className="modals-wrapper">
        {modals}
      </div>
    );
  }
}
