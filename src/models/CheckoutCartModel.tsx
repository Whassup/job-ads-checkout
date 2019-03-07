import { extend, clone } from 'lodash';

import { CheckoutCartOptions } from './CheckoutCartOptionsModel';
import { CheckoutItemModel } from './CheckoutItemModel';
import ProductModel from './ProductModel';

export class CheckoutCartModel {
    items: Map<number, CheckoutItemModel> = new Map();
    private options: CheckoutCartOptions = {
        priceRules: []
    };

    constructor(options: Partial<CheckoutCartOptions> = {}) {
        this.setOptions(options);
    }

    /**
     * Applies new options to cart
     * @param options 
     */
    setOptions(options: Partial<CheckoutCartOptions> = {}) {
        this.options = extend(this.options, options);
    }

    /**
     * Displays the currently applied options
     */
    getOptions() {
        return clone(this.options);
    }

    /**
     * Add a product to the cart. 
     * Adding the same product to the cart twice will increase the qty by 1
     * @param product 
     */
    add(product: ProductModel) {
        const item = this.items.get(product.id);
        
        if (item) {
            item.qty++;
        } else {
            this.items.set(product.id, { product, qty: 1 });
        }
    }

    /**
     * Remove a product from the cart
     * Removing  a product from the cart with decrease the qty 1
     * If qty is zero product will be removed from cart
     * @param product 
     */
    remove(product: ProductModel) {
        const item = this.items.get(product.id);
        
        if (item && item.qty > 1) {
            item.qty--;
        } else {
            this.items.delete(product.id)
        }
    } 

    /**
     * Returns total price excluding pricing rules
     */
    getBaseTotal(): number {
        return Array.from(this.items.values()).reduce((total, item) => {
            return total + item.product.price * item.qty;
        }, 0)
        return 0;
    }
}

