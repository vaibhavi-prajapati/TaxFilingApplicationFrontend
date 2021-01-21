import React, { Component } from 'react';
import EditProfileService from '../services/EditProfileService';
import ViewProfileService from '../services/ViewProfileService';

class ViewAllCustomers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      customers: [],
      isE: '',
    };
  }

  deleteCustomer = (customerId) => {
    EditProfileService.deleteActor(1, customerId).then((res) => {
      this.setState({ customers: this.state.customers.filter((customer) => customer.customerId !== customerId) });
    });
  };
  componentDidMount() {
    ViewProfileService.getAllCustomers().then((res) => {
      this.setState({ customers: res.data });
    });
  }

  cancel() {
    this.props.history.push(`/manageActors/${this.state.id}`);
  }
  render() {
    return (
      <div>
        <h2 className="text-center">All Customers</h2>

        <br></br>
        <div className="row">
          <table className="table table-hover table table-bordered">
            <thead>
              <tr>
                <th> ID</th>
                <th> Name</th>
                <th>Email</th>
                <th>Pan Number</th>
                <th> Contact Number</th>
                <th>Bank Account Number</th>
                <th>Data Of Birth</th>
                <th>Marital Status</th>
                <th> Address</th>
                {/* <th>Is Employee Status</th>*/}
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customer) => (
                <tr key={customer.customerId}>
                  <td> {customer.customerId} </td>
                  <td> {customer.name} </td>
                  <td> {customer.email}</td>
                  <td> {customer.pan}</td>
                  <td> {customer.contactNo}</td>
                  <td> {customer.accountNo}</td>
                  <td> {customer.dateOfBirth}</td>
                  <td> {customer.maritalStatus}</td>
                  <td> {customer.address}</td>
                  {/* <td> {customer.isEmployee}</td>*/}
                  <td>
                    <button style={{ marginLeft: '10px' }} onClick={() => this.deleteCustomer(customer.customerId)} className="btn btn-outline-danger">
                      Delete{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default ViewAllCustomers;
