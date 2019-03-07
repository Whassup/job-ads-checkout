import ProductApi from "./ProductApi";
import productsStub from "./productsStub";


describe('ProductApi', () => {

    describe('getProducts()', () => {
        it('should return array', () => {
           let result = ProductApi.getProducts();
           expect(Array.isArray(result)).toBe(true);
        });

        
        it('should return product data stub', () => {
            let result = ProductApi.getProducts();
            expect(result).toBe(productsStub);
        });
    })

});