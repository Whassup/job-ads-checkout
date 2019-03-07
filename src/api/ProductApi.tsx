import productsStub from "./productsStub";

class ProductApi {
    getProducts(): any {
        return productsStub;
    }

}

export default new ProductApi();