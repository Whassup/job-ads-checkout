import { CheckoutCartModel } from './CheckoutCartModel';
import ProductModel from './ProductModel';
import { CheckoutItemModel } from './CheckoutItemModel';

const product1: ProductModel = {
    name: 'test',
    id: 1,
    price: 1
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
        

        
    });
})