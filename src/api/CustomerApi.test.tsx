import CustomerApi from './CustomerApi';
import customersStub from './customersStub';

describe('CustomerApi', () => {
    describe('getCustomers()', () => {
        it('should return array', () => {
            let result = CustomerApi.getCustomers();
            expect(Array.isArray(result)).toBe(true);
        });
        
        it('should return customer data stub', () => {
            let result = CustomerApi.getCustomers();
            expect(result).toBe(customersStub);
        });
    })
})
