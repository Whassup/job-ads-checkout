import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import CustomerApi from '../api/CustomerApi';
import Checkout from './Checkout';

describe('Checkout', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        ReactDOM.unmountComponentAtNode(container);
    });

    it('renders without crashing', () => {
        ReactDOM.render(<Checkout />, container);
    });

    it('should display product table', () => {
        ReactDOM.render(<Checkout />, container);
        const element = container.querySelector('.checkout-product-table');
        expect(element).not.toBeNull();
    });

    it('should display list of products', () => {
        ReactDOM.render(<Checkout />, container);
        const customerElements = container.querySelectorAll('.checkout-product');
        expect( customerElements.length ).toBe(3);
    });
});
