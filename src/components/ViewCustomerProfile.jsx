import React, { Component } from 'react';

import loginService from '../services/LoginService';

class ViewCustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id1,
      viewCustomerProfile: [],
      isEmp: '',
    };
  }
  componentDidMount() {
    loginService.getCustomer(this.state.id).then((res) => {
      this.setState({ viewCustomerProfile: res.data });
      if (this.state.viewCustomerProfile.isEmployee) {
        this.setState({ isEmp: 'true' });
      } else {
        this.setState({ isEmp: 'false' });
      }
    });
  }
  back = (e) => {
    this.props.history.push(`/mainpage-customer/${this.state.id}`);
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-6 offset-md-3 offset-md-3 p-3 mb-2 text-dark">
          <h2 className="text-center">Your Profile:</h2>

          <br></br>
          <div className="card col-md-8 offset-md-2 ">
            <table className="table table-borderless">
              <thead>
                <tr key={this.state.viewCustomerProfile.customerId}></tr>
                <tr>
                  <th> ID:</th>

                  <td> {this.state.viewCustomerProfile.customerId} </td>
                </tr>

                <tr>
                  <th> Name:</th>

                  <td> {this.state.viewCustomerProfile.name} </td>
                </tr>
                <tr>
                  <th>Email:</th>

                  <td> {this.state.viewCustomerProfile.email}</td>
                </tr>
                <tr>
                  <th> Address:</th>
                  <td> {this.state.viewCustomerProfile.address} </td>
                </tr>
                <tr>
                  <th>Password:</th>
                  <td> {this.state.viewCustomerProfile.password} </td>
                </tr>
                <tr>
                  <th>Pan Number:</th>
                  <td> {this.state.viewCustomerProfile.pan} </td>
                </tr>
                <tr>
                  <th> Contact Number:</th>

                  <td> {this.state.viewCustomerProfile.contactNo} </td>
                </tr>
                <tr>
                  <th>Bank Account Number:</th>

                  <td> {this.state.viewCustomerProfile.accountNo} </td>
                </tr>
                <tr>
                  <th>Data Of Birth:</th>

                  <td> {this.state.viewCustomerProfile.dateOfBirth} </td>
                </tr>
                <tr>
                  <th>Marital Status:</th>

                  <td> {this.state.viewCustomerProfile.maritalStatus} </td>
                </tr>
                <tr>
                  <th>Is Employee:</th>
                  <td> {this.state.isEmp} </td>
                </tr>
              </thead>
            </table>
            <div className="text-center">
              <button className="btn btn-outline-info" onClick={this.back}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewCustomerProfile;
