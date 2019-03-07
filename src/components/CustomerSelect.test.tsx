import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import CustomerApi from '../api/CustomerApi';
import CustomerSelect from './CustomerSelect';

describe('CustomerSelect', () => {
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
        ReactDOM.render(<CustomerSelect />, container);
    });

    it('should display dropdown', () => {
        ReactDOM.render(<CustomerSelect />, container);
        const element = container.querySelector('.customer-select');
        expect(element).not.toBeNull();
    });

    it('should display list of customers', () => {
        ReactDOM.render(<CustomerSelect />, container);
        const customerElements = container.querySelectorAll('.customer-select select option');
        expect( customerElements.length ).toBe(5);
    });

    it('should call onSelect with current customer', () => {
        const onSelect = jasmine.createSpy('onSelect');
        
        act(() => {
            ReactDOM.render(<CustomerSelect onSelect={onSelect}/>, container);
        })
        
        const select: HTMLSelectElement | null = container.querySelector('.customer-select select');
        
        if (select) {
            act(() => {
                select.value = '1'
                select.dispatchEvent(new Event("change", {bubbles: true}));
            });

            expect(onSelect).toBeCalledWith(CustomerApi.getCustomers()[0]);
        }
    });
});
