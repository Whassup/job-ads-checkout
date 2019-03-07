import CustomerModel from '../models/CustomerModel';
import priceDrop from '../util/priceDrop';
import xForY from '../util/xForY';

export default [
    {
        id: 1,
        name: 'default',
    },
    {
        id: 2,
        name: 'SecondBite',
        priceRules: [{
            id: 0,
            name: '3 for 2',
            priceFunction: xForY(3, 2),
            productIds: [1]
        }]
    },
    {
        id: 3,
        name: 'Axil Coffee Roasters',
        priceRules: [{
            id: 0,
            name: 'Price Drop $299.99',
            priceFunction: priceDrop(299.99),
            productIds: [2]
        }]
    },
    {
        id: 4,
        name: 'MYER',
        priceRules: [
            {
                id: 0,
                name: 'Price Drop $299.99',
                priceFunction: priceDrop(389.99),
                productIds: [3]
            },
            {
                id: 0,
                name: '5 for 4',
                priceFunction: xForY(5, 4),
                productIds: [3]
            }
        ]
    }
] as CustomerModel[];
