import React, { Component } from 'react';

import ProductApi from '../api/ProductApi';
import { CheckoutCartModel } from '../models/CheckoutCartModel';
import ProductModel from '../models/ProductModel';
import PriceRule from '../models/PricingRuleModel';
import productsStub from '../api/productsStub';

type Props = {
    priceRules: PriceRule[]
}

type State = {
    products: ProductModel[],
    cart: CheckoutCartModel
}

export class Checkout extends Component<Props> {
    static defaultProps = {
        priceRules: []
    }

    state: State = {
        products: [],
        cart: new CheckoutCartModel({ priceRules: this.props.priceRules })
    }

    componentDidMount() {
        const products = ProductApi.getProducts();
        this.setState({ products });
    }

    /**
     * When prop.priceRules changes cart state needs to be updated with new rules.
     * @param props 
     * @param state 
     */
    static getDerivedStateFromProps(props: Props, { cart }: State) {
        cart.setOptions({ priceRules: props.priceRules });
        return { cart };
    }

    renderItemPrice(product: ProductModel, qty: number) {
        const discountUnitPrice = this.state.cart.getProductFinalPrice(product);
        const totalBase = this.state.cart.getItemBasePrice(product);
        const total = this.state.cart.getItemFinalPrice(product);
        const formatPriceQty = (unit: number, total: number) => `\$${unit} x ${qty} = \$${total}`;
        const base = formatPriceQty(product.price, totalBase);
        const discount = formatPriceQty(discountUnitPrice, total);
        if (product.price === discountUnitPrice) {
            return (<span>{base}</span>);
        } else {
            return (<span>
                <del style={{ color: 'red' }}>{base}</del><br/>
                <span>{discount}</span>
            </span>);
        }
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
                    <td data-label="Price" style={{fontSize: '0.8em', width: '160px'}} className="right aligned">
                        {this.renderItemPrice(product, qty)}
                    </td>
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
                        <td data-label="Base Total" className="right aligned">{this.state.cart.getBaseTotal()}</td>
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
