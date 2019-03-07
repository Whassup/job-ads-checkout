import React, { Component } from 'react'
import { ProductModel } from '../models/ProductModel';
import ProductApi from '../api/ProductApi';

type State = {
    products: ProductModel[]
}

export class Checkout extends Component {
    state: State = {
        products: []
    }

    componentDidMount() {
        this.setState({ products: ProductApi.getProducts() });
    }

    renderProducts() {
        return this.state.products.map(product => (
            <tr key={product.id} className='checkout-product'>
                <td data-label="Name">{product.name}</td>
                <td data-label="Description">{product.description}</td>
                <td data-label="Offers"></td>
                <td data-label="QTY">0</td>
                <td data-label="Price">${product.price}</td>
            </tr>
        ));
    }

    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <table className="ui celled table checkout-product-table">
                    <thead>
                        <tr><th>Name</th>
                            <th>Description</th>
                            <th>Offers</th>
                            <th>QTY</th>
                            <th>Price</th>
                        </tr></thead>
                    <tbody>
                        {this.renderProducts()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Checkout;
