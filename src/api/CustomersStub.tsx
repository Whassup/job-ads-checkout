import CustomerModel from '../models/CustomerModel';
import priceDrop from '../util/priceDrop';

export default [
    {
        id: 1,
        name: 'SecondBite'
    },
    {
        id: 2,
        name: 'Axil Coffee Roasters',
        priceRules: [{
            id: 0,
            name: 'Price Drop $299.99',
            priceFunction: priceDrop(299.99),
            productIds: [2]
        }]
    },
    {
        id: 3,
        name: 'MYER',
        priceRules: [{
            id: 0,
            name: 'Price Drop $299.99',
            priceFunction: priceDrop(389.99),
            productIds: [3]
        }]
    }
] as CustomerModel[];
