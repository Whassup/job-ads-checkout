import { CheckoutItemModel } from './CheckoutItemModel';


export default interface PriceRule {
    id: number;
    name: string;
    priceFunction: (item: CheckoutItemModel) => number;
    productIds: number[];
}