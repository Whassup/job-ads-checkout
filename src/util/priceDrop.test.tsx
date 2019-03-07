import priceDrop from './priceDrop';
import ProductModel from '../models/ProductModel';

const product: ProductModel = {
    name: 'test',
    id: 1,
    price: 1
}

describe('Util', () => {
    describe('priceDrop()', () => {

        it('should return a PriceRuleFunction that applys the new price', () => {
            const newPrice = 20;
            const priceDrop20 = priceDrop(newPrice);
            expect(priceDrop20({
                product,
                qty: 0
            })).toBe(newPrice);
        });

    });
});
