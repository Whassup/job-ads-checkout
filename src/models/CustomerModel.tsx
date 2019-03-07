import PriceRule from "./PricingRuleModel";

export default interface CustomerModel {
    id: number;
    name: string;
    priceRules?: PriceRule[];
}