import React, { Component } from 'react';

import { CustomerModel } from '../models/CustomerModel';
import CustomerSelect from './CustomerSelect';

type State = {
  currentCustomer: CustomerModel
}

class App extends Component {
  state = {
    currentCustomer: null
  }

  setCurrentCustomer(currentCustomer: CustomerModel) {
    this.setState({ currentCustomer });
  }

  render() {
    return (
      <div className="App ui container" style={{ marginTop: '10px' }}>
        <CustomerSelect onSelect={(customer) => this.setCurrentCustomer(customer)}/>
      </div>
    );
  }
}

export default App;
