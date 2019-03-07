import React, { Component } from 'react';

import CustomerModel from '../models/CustomerModel';
import CustomerSelect from './CustomerSelect';
import Checkout from './Checkout';
import customersStub from '../api/customersStub';

type State = {
  currentCustomer?: CustomerModel
}

class App extends Component {
  state: State = {
    currentCustomer: undefined
  }

  setCurrentCustomer(currentCustomer: CustomerModel) {
    this.setState({ currentCustomer });
  }

  renderCheckout() {
    if (this.state.currentCustomer != null) {
      return <Checkout priceRules={this.state.currentCustomer.priceRules || []}/>
    }
  }

  render() {
    return (
      <div className="App ui container" style={{ marginTop: '10px' }}>
        <CustomerSelect onSelect={(customer) => this.setCurrentCustomer(customer)}/>
        {this.renderCheckout()}
      </div>
    );
  }
}

export default App;
