import { PriceRuleFunction } from '../types/PriceRuleFunction';

/**
 * Creates a PriceRuleFunction to apply a price drop to a static value
 * @param price 
 */
export default function priceDrop(price: number): PriceRuleFunction {
    return () => {
        return price;
    }
}