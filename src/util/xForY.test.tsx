import { CheckoutItemModel } from '../models/CheckoutItemModel';
import ProductModel from '../models/ProductModel';
import xForY from './xForY';

const product: ProductModel = {
    id: 1,
    name: 'test',
    price: 10
}

describe('Utils', () => {
    describe('xForY()', () => {
        describe('Should throw error when amountTotal is less than amountFree', () => {
            expect(() => xForY(3, 3)).toThrow();
            expect(() => xForY(3, 4)).toThrow();
        });

        describe('When item.qty is greater than X', () => {
            const x = 5;
            const item: CheckoutItemModel = {
                product,
                qty: 4
            }

            it('should return same price', () => {
                expect(xForY(x, 1)(item)).toBe(product.price);
            });
        });

        describe('When item.qty is lower than X', () => {
            const item: CheckoutItemModel = {
                product,
                qty: 30
            }

            it('should return discounted price', () => {
                const tests = [
                    [4, 3, 7.67],// x, y, expected
                    [5, 3, 6],
                    [21, 5, 2.33],
                ]

                tests.forEach(([x, y, expected]) => {
                    expect(xForY(x, y)(item)).toBe(expected);
                });
            });
        });


    });
})