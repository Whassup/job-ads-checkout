import ProductModel from "./ProductModel";

export interface CheckoutItemModel {
    product: ProductModel;
    qty: number;
}