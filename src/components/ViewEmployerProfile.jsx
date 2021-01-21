import React, { Component } from 'react';

import loginService from '../services/LoginService';

class ViewCustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id1,
      viewEmployerProfile: [],
    };
  }
  componentDidMount() {
    loginService.getEmployer(this.state.id).then((res) => {
      this.setState({ viewEmployerProfile: res.data });
    });
  }
  back = (e) => {
    this.props.history.push(`/mainpage-employer/${this.state.id}`);
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
                <tr key={this.state.viewEmployerProfile.employerId}>
                  <tr>
                    <th> ID:</th>
                    <td> {this.state.viewEmployerProfile.employerId} </td>
                  </tr>
                  <tr>
                    <th> Organization Name:</th>
                    <td> {this.state.viewEmployerProfile.organization} </td>
                  </tr>
                  <tr>
                    <th> Email:</th>
                    <td> {this.state.viewEmployerProfile.email}</td>
                  </tr>
                  <tr>
                    <th> Password:</th>
                    <td> {this.state.viewEmployerProfile.password}</td>
                  </tr>
                  <tr>
                    <th> Contact Number:</th>
                    <td> {this.state.viewEmployerProfile.contactNo}</td>
                  </tr>
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
