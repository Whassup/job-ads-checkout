import { CheckoutItemModel } from '../models/CheckoutItemModel';

export type PriceRuleFunction =  (item: CheckoutItemModel) => number;
