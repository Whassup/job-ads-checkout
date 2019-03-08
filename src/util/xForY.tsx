import { PriceRuleFunction } from '../types/PriceRuleFunction';
import { CheckoutItemModel } from '../models/CheckoutItemModel';

/**
 * Calculates discounted price for 3 for 2 type deals
 * This is not calculated as flat percentage per unit.
 * This removes the total cost of every Y out of X items 
 * e.g 2 / 3 of total qty cost is removed from total price and new unit price is calculated from 
 * new total.
 * @param amountTotal 
 * @param amountFree 
 */
export default function xForY(amountTotal: number, amountFree: number): PriceRuleFunction {
    if (amountTotal <= amountFree) throw('amountTotal (x) must be larger than amountFree (y)');
    return (item: CheckoutItemModel) => {
        if(item.qty >= amountTotal) {
            const totalPrice = item.qty * item.product.price;
            const discountPayQty = Math.round(item.qty * (amountFree / amountTotal));
            const discountQty = item.qty - discountPayQty;
            const discountedItemsPrice = discountQty * item.product.price;
            const finalTotalPrice = totalPrice - discountedItemsPrice;
            const unitPrice = finalTotalPrice / item.qty;

            return +(unitPrice);
        }
        return item.product.price;
    };
}