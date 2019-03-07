import React, { Component } from 'react';

import ProductApi from '../api/ProductApi';
import { CheckoutCartModel } from '../models/CheckoutCartModel';
import ProductModel from '../models/ProductModel';

type State = {
    products: ProductModel[],
    cart: CheckoutCartModel
}

export class Checkout extends Component {
    state: State = {
        products: [],
        cart: new CheckoutCartModel()
    }

    componentDidMount() {
        const products = ProductApi.getProducts();
        this.setState({ products });
    }

    renderProducts() {
        return this.state.products.map(product => {
            const { qty } = this.state.cart.items.get(product.id) || { qty: 0 };
            return (
                <tr key={product.id} className='checkout-product'>
                    <td data-label="Name">{product.name}</td>
                    <td data-label="Description">{product.description}</td>
                    <td data-label="Offers"></td>
                    <td data-label="QTY" style={{ width: '100px' }}>
                        <div className="mini ui basic buttons">
                            <span className="ui labeled basic right pointing label qty">
                                {qty}
                            </span>
                            <button className="ui icon button add-qty" onClick={() => this.addItem(product)}>
                                <i className="small plus icon"></i>
                            </button>
                            <button className="ui icon button remove-qty" onClick={() => this.removeItem(product)}>
                                <i className="small minus icon"></i>
                            </button>
                        </div>
                    </td>
                    <td data-label="Price">${product.price}</td>
                </tr>
            );
        });
    }

    /**
     * Add item qty to update cart state
     * @param product 
     */
    addItem(product: ProductModel) {
        this.state.cart.add(product);
        this.setState({ cart: this.state.cart });
    }

    /**
     * Remove item qty and update cart state
     * @param product 
     */
    removeItem(product: ProductModel) {
        this.state.cart.remove(product);
        this.setState({ cart: this.state.cart });
    }

    renderTotal() {
        return (
            <table className="ui definition table checkout-total-table">
                <tbody>
                    <tr className='checkout-base-total'>
                        <td className="right aligned">Base Total</td>
                        <td data-label="Base Total" className="right aligned">$100</td>
                    </tr>
                </tbody>
            </table>
        );
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
                {this.renderTotal()}
            </div>
        )
    }
}

export default Checkout;
