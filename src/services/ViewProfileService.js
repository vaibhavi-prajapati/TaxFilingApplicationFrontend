import axios from 'axios';

const TAX_API_BASE_URL = 'http://localhost:8081/';

class ViewProfileService {
  getCustomer(id) {
    return axios.get(TAX_API_BASE_URL + 'viewCustomerProfile/' + id);
  }

  getEmployer(id) {
    return axios.get(TAX_API_BASE_URL + 'viewEmployerProfile/' + id);
  }

  getRepresentative(id) {
    return axios.get(TAX_API_BASE_URL + 'viewRepresentativeProfile/' + id);
  }

  getAdmin(id) {
    return axios.get(TAX_API_BASE_URL + 'viewAdminProfile/' + id);
  }

  getAllCustomers() {
    return axios.get(TAX_API_BASE_URL + 'viewAllCustomers');
  }

  getAllEmployers() {
    return axios.get(TAX_API_BASE_URL + 'viewAllEmployers');
  }

  getAllRepresentatives() {
    return axios.get(TAX_API_BASE_URL + 'viewAllRepresentatives');
  }
}
export default new ViewProfileService();
