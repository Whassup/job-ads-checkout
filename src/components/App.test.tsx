import React from 'react';
import ReactDOM from 'react-dom';
import { scryRenderedComponentsWithType, renderIntoDocument } from 'react-dom/test-utils';

import App from './App';
import Checkout from './Checkout';

describe('App', () => {
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
    ReactDOM.render(<App />, container);
  });

  it('should not display checkout ', () => {
    // @ts-ignore - TODO find out why typing does not return correct type
    const app: App = renderIntoDocument(<App />);
    
    const result = scryRenderedComponentsWithType(
      app,
      Checkout as any
    );
    expect(result.length).toBe(0);
  });

  it('should display checkout when currentCustomer is defined', () => {
    // @ts-ignore - TODO find out why typing does not return correct type
    const app: App = renderIntoDocument(<App />);

    app.setCurrentCustomer({
      id: 1,
      name: 'test',
      priceRules: [
        { 
          id: 1,
          name: 'price rule',
          priceFunction: () => 0,
          productIds: []
        }
      ]
    });

    const result = scryRenderedComponentsWithType(
      app,
      Checkout as any
    );

    expect(result.length).toBe(1);
  });
})

