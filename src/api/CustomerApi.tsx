import { CustomerModel } from "../models/CustomerModel";
import CustomersStub from "./CustomersStub";

class CustomerApi {
    getCustomers(): CustomerModel[] {
        return CustomersStub;
    }

}

export default new CustomerApi();