import axios from 'axios';
const API_BASE_URL = 'http://localhost:8081';

class ViewNoticeService {
  getAdminNotice(email_n) {
    return axios.get(API_BASE_URL + '/viewadminnotice/' + email_n);
  }
  getRepresentativeNotice(representative_id) {
    return axios.get(API_BASE_URL + '/viewRepresentativeNotice/' + representative_id);
  }
  getCustomerNotice(customer_id) {
    return axios.get(API_BASE_URL + '/viewcustomernotice/' + customer_id);
  }
}
export default new ViewNoticeService();
