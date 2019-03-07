import React, { Component, FormEvent } from 'react';

import CustomerApi from '../api/CustomerApi';
import CustomerModel from '../models/CustomerModel';

type Props = {
    onSelect: (customer: CustomerModel) => void;
}

type State = {
    customers: CustomerModel[];
    currentCustomer: CustomerModel;
}

const defaultCustomer: CustomerModel = { id: 0, name: 'Select customer' }

export class CustomerSelect extends Component<Props> {
    static defaultProps = {
        onSelect: () => undefined
    }

    state: State = {
        customers: [],
        currentCustomer: defaultCustomer
    }

    componentDidMount() {
        this.setState({ customers: CustomerApi.getCustomers() })
    }

    renderOptions() {
        const customers = [defaultCustomer, ...this.state.customers]
        return customers.map(customer =>
            <option value={customer.id} key={customer.id}>
                {customer.name}
            </option>
        )
    }

    onCustomerSelect(id: string) {
        const currentCustomer = this.state.customers.find(customer => customer.id === +id) || defaultCustomer
        this.setState({ currentCustomer });
        this.props.onSelect(currentCustomer);
    }

    render() {
        return (
            <div className="customer-select">
                <select
                    className="ui fluid dropdown" 
                    onChange={(e) => this.onCustomerSelect(e.target.value)}
                    value={this.state.currentCustomer.id}
                >
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}

export default CustomerSelect;
