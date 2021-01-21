import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

class RegistrationService {
  createEmployee(employer) {
    return axios.post(API_BASE_URL + '/registerEmployer', employer);
  }
  createCustomer(customer, organization) {
    return axios.post(API_BASE_URL + '/registerCustomer/' + organization, customer);
  }
  createRepresentative(representative) {
    return axios.post(API_BASE_URL + '/registerRepresentative', representative);
  }
}
export default new RegistrationService();
