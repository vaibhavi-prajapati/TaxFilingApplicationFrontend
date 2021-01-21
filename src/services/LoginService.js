import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

class loginService {
  loginUser(id, password, choice) {
    return axios.get(API_BASE_URL + '/login/' + id + '/' + password + '/' + choice);
  }

  getCustomer(id) {
    return axios.get(API_BASE_URL + '/viewCustomerProfile/' + id);
  }

  getEmployer(id) {
    return axios.get(API_BASE_URL + '/viewEmployerProfile/' + id);
  }

  getRepresentative(id) {
    return axios.get(API_BASE_URL + '/viewRepresentativeProfile/' + id);
  }

  getAdmin(id) {
    return axios.get(API_BASE_URL + '/viewAdminProfile');
  }

  getAllCustomers() {
    return axios.get(API_BASE_URL + '/viewAllCustomers');
  }

  getAllEmployers() {
    return axios.get(API_BASE_URL + '/viewAllEmployers');
  }

  getAllRepresentatives() {
    return axios.get(API_BASE_URL + '/viewAllRepresentatives');
  }

  forgotPassword(id, userChoice, queChoice, answer, password) {
    return axios.put(API_BASE_URL + '/forgotPassword/' + id + '/' + userChoice + '/' + queChoice + '/' + answer + '/' + password);
  }

  updateCustomer(cust, id) {
    return axios.put(API_BASE_URL + '/updateCustomer/' + id, cust);
  }

  updateEmployer(emp, id) {
    return axios.put(API_BASE_URL + '/updateEmployer/' + id, emp);
  }

  updateRepresentative(rep, id) {
    return axios.put(API_BASE_URL + '/updateRepresentative/' + id, rep);
  }

  updateAdmin(admin, id) {
    return axios.put(API_BASE_URL + '/updateAdmin/' + id, admin);
  }

  createEmployer(employer) {
    return axios.post(API_BASE_URL + '/registerEmployer', employer);
  }

  deleteActor(choice, actorId) {
    return axios.delete(API_BASE_URL + '/removeActor/' + choice + '/' + actorId);
  }
}

export default new loginService();
