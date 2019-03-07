import CustomerApi from "./CustomerApi";
import CustomersStub from "./CustomersStub";

it('should return array', () => {
    let result = CustomerApi.getCustomers();
    expect(Array.isArray(result)).toBe(true);
});

it('should return customer data stub', () => {
    let result = CustomerApi.getCustomers();
    expect(result).toBe(CustomersStub);
});