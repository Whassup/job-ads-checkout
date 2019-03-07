import productsStub from "./productsStub";
import ProductModel from '../models/ProductModel';

class ProductApi {
    getProducts(): ProductModel[] {
        return productsStub;
    }

}

export default new ProductApi();