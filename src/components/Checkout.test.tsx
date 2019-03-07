import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import CustomerApi from '../api/CustomerApi';
import Checkout from './Checkout';

describe('Checkout', () => {
    let container: HTMLDivElement;

    // Helpers
    const getQty: () => number = () => {
        const element = container.querySelector('.checkout-product .qty');
        if (element && element.textContent) return +element.textContent;
        return -1;
    }

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

    it('should increase item qty on click', () => {
        act(() => {
            ReactDOM.render(<Checkout />, container);
        })

        expect(getQty()).toBe(0);
        
        const addButton: Element | null = container.querySelector('.checkout-product .add-qty');
        
        if (addButton) {
            act(() => {
                addButton.dispatchEvent(new Event("click", {bubbles: true}));
            });
            expect(getQty()).toBe(1);
        }
    });

    it('should decrease item qty on click', () => {
        act(() => {
            ReactDOM.render(<Checkout />, container);
        })

        // Set qty to 1
        const addButton: Element | null = container.querySelector('.checkout-product .add-qty');
        if (addButton) {
            act(() => {
                addButton.dispatchEvent(new Event("click", {bubbles: true}));
            });
            expect(getQty()).toBe(1);
        }
        
        // Remove 
        const removeButton: Element | null = container.querySelector('.checkout-product .remove-qty');
        if (removeButton) {
            act(() => {
                removeButton.dispatchEvent(new Event("click", {bubbles: true}));
            });
            expect(getQty()).toBe(0);
        }
    });

});
