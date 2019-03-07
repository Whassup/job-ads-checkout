import { CheckoutCartModel } from './CheckoutCartModel';
import ProductModel from './ProductModel';
import { CheckoutItemModel } from './CheckoutItemModel';

const product1: ProductModel = {
    name: 'test',
    id: 1,
    price: 1
}

const product2: ProductModel = {
    name: 'test',
    id: 2,
    price: 5.99
}

const product3: ProductModel = {
    name: 'test',
    id: 3,
    price: 100.78
}

describe('CheckoutCartModel', () => {
    let cart: CheckoutCartModel; 

    describe('constructor', () => {
        it('should create new cart', () => {
            expect(
                () => {
                    const cart = new CheckoutCartModel();
                }
            ).not.toThrowError();
        });
    })

    describe('add()', () => {
        it('should add product to cart', () => {
            const cart = new CheckoutCartModel();
            
            cart.add(product1);

            expect(cart.items.size).toBe(1);
        });

        it('should add product instance to cart once', () => {
            const cart = new CheckoutCartModel();
            cart.add(product1);
            cart.add(product1);
            
            expect(cart.items.size).toBe(1);
        });

        it('should increase item qty by 1', () => {
            const cart = new CheckoutCartModel();
            cart.add(product1);
            const item = cart.items.get(product1.id);

            if (item) {
                expect(item.qty).toBe(1);
                cart.add(product1);
                expect(item.qty).toBe(2);
            } else {
                fail('No item found for provided ID');
            }
        });
    });

    describe('remove()', () => {
        describe('When single instance of item in cart', () => {
            
            beforeEach(() => {
                cart = new CheckoutCartModel();
                cart.add(product1);
            })

            it('should remove item from cart', () => {
                cart.remove(product1);
                expect(cart.items.size).toBe(0);
            });
        });

        describe('When multiple instances of item in cart', () => {
            let item: CheckoutItemModel | undefined;

            beforeEach(() => {
                cart = new CheckoutCartModel();
                cart.add(product1);
                cart.add(product1);
                item = cart.items.get(product1.id);
            })

            it('should reduce item qty in cart', () => {
                cart.remove(product1);
                
                if(item) {
                    expect(item.qty).toBe(1);
                } else {
                    fail('No item found for provided ID');
                }
    
                cart.remove(product1);
                expect(cart.items.size).toBe(0);
            });

            it('should remove item from cart when qty reduced to 0', () => {
                cart.remove(product1);
                cart.remove(product1);
                expect(cart.items.size).toBe(0);
            });
        });
        
        describe('getBaseTotal()', () => {
            describe('When there is no items in the cart', () => {
                beforeEach(() => {
                    cart = new CheckoutCartModel();
                });

                it('should return total 0', () => {
                    expect(cart.getBaseTotal()).toBe(0);
                })
            });

            describe('When there are multiple instance of a single item in cart', () => {
                const qty = 3;
                const expectedTotal = qty * product1.price;

                beforeEach(() => {
                    cart = new CheckoutCartModel();
                    // Add a defined qty of items of single product
                    Array(qty)
                        .fill(product1)
                        .forEach((p) => cart.add(p));
                });

                it('should return total factoring in qty', () => {
                    expect(cart.getBaseTotal()).toBe(expectedTotal);
                })
            });

            describe('When there are multiple items in cart', () => {
                const expectedTotal = 107.77

                beforeEach(() => {
                    cart = new CheckoutCartModel();
                    // Add multiple different products to cart
                   [product1, product2, product3].forEach((p) => cart.add(p));
                });

                it('should return total factoring in qty', () => {
                    expect(cart.getBaseTotal()).toBe(expectedTotal);
                })
            });

            describe('When there are multiple items in cart', () => {
                const items = [
                    { qty: 3, product: product1 },
                    { qty: 8, product: product2 },
                    { qty: 134, product: product3 }
                ]
                const expectedTotal = 13555.44;

                beforeEach(() => {
                   cart = new CheckoutCartModel();
                    // Add multiple different products to cart with different quantities.
                   items.forEach(({product, qty}) => {
                       Array(qty)
                        .fill(product)
                        .forEach((p) => cart.add(p));
                   });
                });

                it('Should return total factoring price and qty of each item', () => {
                    expect(cart.getBaseTotal()).toBe(expectedTotal);
                })
            });
        });
        
    });
})