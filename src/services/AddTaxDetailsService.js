import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

class AddTaxDetailsService {
  addTaxDetailsForEmployee(objTaxForm) {
    return axios.put(BASE_URL + '/addTaxDetailsForEmployee', objTaxForm);
  }

  getCustomerById(id) {
    return axios.get(BASE_URL + '/getCustomerById/' + id);
  }

  addTaxDetailsByCustomer(objTaxForm) {
    return axios.put(BASE_URL + '/addTaxDetailsByCustomer', objTaxForm);
  }

  viewAllEmployeesByOrganization(employerId) {
    return axios.get(BASE_URL + '/viewAllEmployeesByOrganization/' + employerId);
  }
}

export default new AddTaxDetailsService();
