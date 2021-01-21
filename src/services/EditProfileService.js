import axios from 'axios';

const TAX_API_BASE_URL = 'http://localhost:8081/';

class EditProfileService {
  updateCustomer(cust, id) {
    return axios.put(TAX_API_BASE_URL + 'updateCustomer/' + id, cust);
  }

  updateEmployer(emp, id) {
    return axios.put(TAX_API_BASE_URL + 'updateEmployer/' + id, emp);
  }
  updateRepresentative(rep, id) {
    return axios.put(TAX_API_BASE_URL + 'updateRepresentative/' + id, rep);
  }
  updateAdmin(admin, id) {
    return axios.put(TAX_API_BASE_URL + 'updateAdmin/' + id, admin);
  }

  forgotPassword(id, userChoice, queChoice, answer, password) {
    return axios.put(TAX_API_BASE_URL + 'forgotPassword/' + id + '/' + userChoice + '/' + queChoice + '/' + answer + '/' + password);
  }

  deleteActor(choice, actorId) {
    return axios.delete(TAX_API_BASE_URL + 'removeActor/' + choice + '/' + actorId);
  }
}

export default new EditProfileService();
