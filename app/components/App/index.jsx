import React from 'react';
import { nuclearComponent } from 'nuclear-js-react-addons';

@nuclearComponent({
  mock: true
})

export default class App extends React.Component {
  render() {
    return (
      <h1 className='sample'>Hi!!</h1>
    );
  }
}

