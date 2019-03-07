import CustomerModel from "../models/CustomerModel";
import customersStub from "./customersStub";

class CustomerApi {
    getCustomers(): CustomerModel[] {
        return customersStub;
    }

}

export default new CustomerApi();