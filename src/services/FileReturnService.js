import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

class FileReturnService {
  getTaxFormsForRepresentative() {
    return axios.get(`${API_BASE_URL}/getTaxFormsForRepresentative`);
  }

  verifyTaxformByRepresentative(representativeId, taxformId, choice) {
    return axios.put(`${API_BASE_URL}/verifyTaxformByRepresentative/${representativeId}/${taxformId}/${choice}`);
  }

  viewTaxForm(taxformId) {
    return axios.get(`${API_BASE_URL}/getTaxForm/${taxformId}`);
  }

  getTaxFormsForAdmin() {
    return axios.get(`${API_BASE_URL}/getTaxFormsForAdmin`);
  }
  verifyTaxformByAdmin(taxformId, choice) {
    return axios.put(`${API_BASE_URL}/verifyTaxformByAdmin/${taxformId}/${choice}`);
  }

  getTaxFormForCustomer(customerId) {
    return axios.get(`${API_BASE_URL}/getTaxFormForCustomer/${customerId}`);
  }

  fileReturn(customerId) {
    return axios.post(`${API_BASE_URL}/fileReturn/${customerId}`);
  }
}
export default new FileReturnService();
